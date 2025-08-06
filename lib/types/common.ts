// TypeScript interfaces for the agent system

// Chat API request payload
export interface AgentRequest {
  message: string;
  agentType?: string;
  stream?: boolean;
}

// Chat API response format
export interface AgentResponse {
  success: boolean;
  data?: string;
  error?: string;
  agentType?: string;
  timestamp?: string;
}

// Server-Sent Event chunk format for streaming
export interface StreamChunk {
  type: 'start' | 'chunk' | 'complete' | 'error';
  content?: string;
  error?: string;
  agentType?: string;
  timestamp?: string;
}

// AWS Bedrock agent configuration
export interface AgentConfig {
  agentId: string;
  agentAliasId: string;
  region?: string;
}
