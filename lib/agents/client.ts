import { BedrockAgentRuntimeClient } from '@aws-sdk/client-bedrock-agent-runtime';

// AWS Bedrock Agent Runtime client configured with environment variables
// Required env vars: AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
export const bedrockAgentClient = new BedrockAgentRuntimeClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
