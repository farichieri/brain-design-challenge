export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            RCC Brain Design Challenge
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Backend API for AI chat functionality using AWS Bedrock
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            API Endpoint
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                POST /api/chat
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Send messages to AI agents with support for both streaming and block responses.
              </p>
              
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Request Body:</h4>
                <pre className="text-sm overflow-x-auto">
{`{
  "message": "Hello, how can you help me?",
  "agentType": "ouaf",  // optional, defaults to "ouaf"
  "stream": false       // optional, true for streaming
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Response Modes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Block Response (stream: false)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Returns the complete response at once.
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-3">
                <pre className="text-xs overflow-x-auto">
{`{
  "success": true,
  "data": "Complete response...",
  "agentType": "ouaf",
  "timestamp": "2024-01-01T00:00:00Z"
}`}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Streaming Response (stream: true)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Returns Server-Sent Events for real-time streaming.
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-3">
                <pre className="text-xs overflow-x-auto">
{`event: start
data: {"type":"start","agentType":"ouaf"}

event: chunk  
data: {"type":"chunk","content":"Hello..."}

event: complete
data: {"type":"complete"}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Environment Variables Required
          </h2>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">AWS_REGION</code></li>
              <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">AWS_ACCESS_KEY_ID</code></li>
              <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">AWS_SECRET_ACCESS_KEY</code></li>
              <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">BEDROCK_AGENT_ID</code></li>
              <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">BEDROCK_AGENT_ALIAS_ID</code></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
