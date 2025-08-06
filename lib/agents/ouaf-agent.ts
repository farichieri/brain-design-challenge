// This file is deprecated - use invoke-agent.ts instead
// Keeping for compatibility but updating to use correct env vars

import { bedrockAgentClient } from './client';
import { InvokeAgentCommand } from '@aws-sdk/client-bedrock-agent-runtime';

export async function invokeOuafAgent(input: string) {
  const command = new InvokeAgentCommand({
    agentId: process.env.BEDROCK_AGENT_ID!,        // Fixed: was OUAF_AGENT_ID
    agentAliasId: process.env.BEDROCK_AGENT_ALIAS_ID!,  // Fixed: was OUAF_AGENT_ALIAS_ID
    sessionId: crypto.randomUUID(),
    inputText: input,
  });

  const response = await bedrockAgentClient.send(command);
  return response;
}
