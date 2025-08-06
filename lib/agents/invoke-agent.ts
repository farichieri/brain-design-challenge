import { bedrockAgentClient } from './client';
import { 
  InvokeAgentCommand, 
  InvokeAgentCommandInput, 
  InvokeAgentCommandOutput 
} from '@aws-sdk/client-bedrock-agent-runtime';
import { logAgentEvent, logAgentError } from './errors';

// Invoke OUAF agent for block (non-streaming) responses
// Required env vars: BEDROCK_AGENT_ID, BEDROCK_AGENT_ALIAS_ID
export async function invokeOuafAgent(message: string): Promise<InvokeAgentCommandOutput> {
  try {
    const params: InvokeAgentCommandInput = {
      agentId: process.env.BEDROCK_AGENT_ID!,
      agentAliasId: process.env.BEDROCK_AGENT_ALIAS_ID!,
      sessionId: crypto.randomUUID(),
      inputText: message,
    };

    logAgentEvent('ouaf', 'Invoking agent for block response', { 
      agentId: params.agentId,
      agentAliasId: params.agentAliasId,
      messageLength: message.length
    });

    const command = new InvokeAgentCommand(params);
    const response = await bedrockAgentClient.send(command);

    logAgentEvent('ouaf', 'Agent response received', {
      hasCompletion: !!response.completion,
      sessionId: response.sessionId
    });

    return response;
    
  } catch (error) {
    logAgentError('ouaf', error);
    throw new Error(`Failed to invoke OUAF agent: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
