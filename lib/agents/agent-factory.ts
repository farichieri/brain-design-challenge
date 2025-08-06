import { invokeOuafAgent } from './ouaf-agent';
import { streamAgentResponse } from './stream-utils';
import { InvokeAgentCommandOutput } from '@aws-sdk/client-bedrock-agent-runtime';

// TypeScript overloads for proper return type inference
export async function agentFactory(
  agentType: string,
  message: string,
  stream: true
): Promise<AsyncGenerator<string>>;

export async function agentFactory(
  agentType: string,
  message: string,
  stream: false
): Promise<string>;

export async function agentFactory(
  agentType: string,
  message: string,
  stream?: boolean
): Promise<string>;

// Factory function that routes to appropriate agent based on type
export async function agentFactory(
  agentType: string,
  message: string,
  stream = false
): Promise<string | AsyncGenerator<string>> {
  switch (agentType) {
    case 'ouaf': {
      if (stream) {
        return streamAgentResponse(message);
      }

      const rawResponse: InvokeAgentCommandOutput = await invokeOuafAgent(message);
      return await extractTextFromResponse(rawResponse);
    }

    default:
      throw new Error(`Unknown agent type: ${agentType}`);
  }
}

// Extract and concatenate text from Bedrock completion stream
async function extractTextFromResponse(response: InvokeAgentCommandOutput): Promise<string> {
  try {
    if (response.completion) {
      let fullText = '';
      const decoder = new TextDecoder();
      
      for await (const chunk of response.completion) {
        if (chunk.chunk?.bytes) {
          const chunkText = decoder.decode(chunk.chunk.bytes);
          fullText += chunkText;
        }
      }
      
      return fullText.trim() || 'No response content received from agent';
    }

    return 'No completion stream received from agent';
  } catch (error) {
    return `Error processing response: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}
