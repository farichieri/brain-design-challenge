import {
  InvokeAgentCommand,
  InvokeAgentCommandInput,
} from '@aws-sdk/client-bedrock-agent-runtime';
import { bedrockAgentClient } from './client';
import { logAgentEvent, logAgentError } from './errors';

// Stream OUAF agent response as async generator for real-time chunks
export async function* streamAgentResponse(input: string): AsyncGenerator<string> {
  try {
    const params: InvokeAgentCommandInput = {
      agentId: process.env.BEDROCK_AGENT_ID!,
      agentAliasId: process.env.BEDROCK_AGENT_ALIAS_ID!,
      sessionId: crypto.randomUUID(),
      inputText: input,
    };

    const command = new InvokeAgentCommand(params);
    
    logAgentEvent('ouaf', 'Invoking agent for streaming');
    
    const response = await bedrockAgentClient.send(command);
    const { completion } = response;

    if (!completion) {
      logAgentEvent('ouaf', 'No completion stream received');
      yield 'No response from agent.';
      return;
    }

    const decoder = new TextDecoder();
    let chunkCount = 0;

    // Process each chunk from the completion stream
    for await (const chunk of completion) {
      try {
        if (chunk.chunk?.bytes) {
          const decodedText = decoder.decode(chunk.chunk.bytes);
          chunkCount++;
          
          logAgentEvent('ouaf', `Processing chunk ${chunkCount}`, { 
            length: decodedText.length,
            preview: decodedText.substring(0, 50) + (decodedText.length > 50 ? '...' : '')
          });
          
          yield decodedText;
        }
      } catch (chunkError) {
        logAgentError('ouaf', `Error processing chunk ${chunkCount}: ${chunkError}`);
        yield `[Error processing chunk: ${chunkError instanceof Error ? chunkError.message : 'Unknown error'}]`;
      }
    }

    logAgentEvent('ouaf', `Stream completed. Total chunks: ${chunkCount}`);
    
  } catch (error) {
    logAgentError('ouaf', error);
    yield `[Stream Error: ${error instanceof Error ? error.message : 'Unknown streaming error'}]`;
  }
}
