import { agentFactory } from '@/lib/agents/agent-factory';
import { formatAgentError, agentErrors, logAgentEvent, logAgentError } from '@/lib/agents/errors';

// Request payload structure for chat API
interface AgentRequest {
  message: string;        // User message to send to AI agent
  agentType?: string;     // Agent type (defaults to 'ouaf')
  stream?: boolean;       // Whether to stream response chunks
}

// Main chat endpoint - supports both streaming and block responses
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, agentType = 'ouaf', stream = false } = body as AgentRequest;

    // Validate required fields
    if (!message || typeof message !== 'string') {
      return new Response(
        JSON.stringify({ success: false, error: 'Message is required and must be a string' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    logAgentEvent(agentType, 'Incoming message', { message, stream });

    if (!stream) {
      // Block mode: return complete response at once
      const response = await agentFactory(agentType, message, false);
      
      logAgentEvent(agentType, 'Block response ready');

      return new Response(
        JSON.stringify({ 
          success: true, 
          data: response,
          agentType,
          timestamp: new Date().toISOString()
        }),
        { 
          status: 200, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    // Stream mode: return chunks via Server-Sent Events
    logAgentEvent(agentType, 'Starting stream response');
    
    const streamGenerator = await agentFactory(agentType, message, true);

    const streamResponse = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        
        try {
          // Send stream start event
          controller.enqueue(encoder.encode(`event: start\ndata: {"type":"start","agentType":"${agentType}"}\n\n`));
          
          // Process and send each chunk
          for await (const chunk of streamGenerator) {
            if (chunk) {
              const data = JSON.stringify({
                type: 'chunk',
                content: chunk,
                timestamp: new Date().toISOString()
              });
              controller.enqueue(encoder.encode(`event: chunk\ndata: ${data}\n\n`));
            }
          }
          
          // Send stream completion event
          controller.enqueue(encoder.encode(`event: complete\ndata: {"type":"complete"}\n\n`));
          
        } catch (error) {
          logAgentError(agentType, error);
          
          const errorData = JSON.stringify({
            type: 'error',
            error: formatAgentError(error)
          });
          controller.enqueue(encoder.encode(`event: error\ndata: ${errorData}\n\n`));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(streamResponse, {
      status: 200,
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

  } catch (err) {
    logAgentError('system', err);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: formatAgentError(err) || agentErrors.general,
        timestamp: new Date().toISOString()
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}