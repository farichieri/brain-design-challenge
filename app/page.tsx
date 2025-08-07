export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Red Clay Brain – Take-Home Design Challenge
          </h1>
          <div className="flex justify-center items-center gap-6 text-lg text-gray-600 dark:text-gray-300 mb-6">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-semibold">
              Duration: 48 Hours
            </span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Build a polished AI chat interface. The backend is ready - your job is to create an amazing frontend experience!
          </p>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-700 rounded px-3 py-2 text-center">Next.js (App Router)</div>
            <div className="bg-white dark:bg-gray-700 rounded px-3 py-2 text-center">TypeScript</div>
            <div className="bg-white dark:bg-gray-700 rounded px-3 py-2 text-center">Tailwind CSS</div>
            <div className="bg-white dark:bg-gray-700 rounded px-3 py-2 text-center">AWS Bedrock</div>
          </div>
        </div>

        {/* Challenge Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Challenge Overview
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Build a frontend for the AI assistant. The backend API is ready and can accept chat messages and return AI agent responses.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded mb-6">
            <p className="text-yellow-800 dark:text-yellow-200 font-semibold">
              The AWS Bedrock Agent will only be accessible for 48 hours!
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 rounded">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
              📋 Check the README.md for Complete Task Instructions
            </h3>
            <p className="text-blue-700 dark:text-blue-300">
              All challenge requirements, evaluation criteria, and detailed instructions are available in the README.md file. 
              Please review it carefully before starting your development.
            </p>
          </div>
        </div>

        {/* API Reference */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Backend API Reference
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                Available Endpoints
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">GET /api/health</code> - Health check</li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">POST /api/chat</code> - Chat with AI agent</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                Request Format
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-4">
                <pre className="text-sm overflow-x-auto">
{`interface ChatRequest {
  message: string;
  stream?: boolean;   // false for block, true for streaming
}`}
                </pre>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Block Response
                </h3>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-4">
                  <pre className="text-sm overflow-x-auto">
{`{
  "success": true,
  "data": "AI response here...",
  "timestamp": "2025-08-06T10:30:00Z"
}`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Stream Response (SSE)
                </h3>
                <div className="bg-gray-100 dark:bg-gray-700 rounded p-4">
                  <pre className="text-sm overflow-x-auto">
{`event: start
data: {"type":"start"}

event: chunk  
data: {"type":"chunk","content":"Hello"}

event: complete
data: {"type":"complete"}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Node.js 18+</li>
                <li>npm or yarn</li>
                <li>Code editor</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Setup Commands</h3>
              <div className="bg-gray-200 dark:bg-gray-700 rounded p-4 font-mono text-sm">
                <div>npm install</div>
                <div>cp .env.example .env</div>
                <div>npm run dev</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips for Success */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Tips for Success
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Start with streaming implementation</strong> - it is the core functionality</li>
              <li><strong>Focus on user experience</strong> - smooth animations and clear feedback</li>
              <li><strong>Handle edge cases</strong> - network issues, empty states, loading states</li>
            </ul>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li><strong>Keep components small</strong> - easier to test and maintain</li>
              <li><strong>Use TypeScript effectively</strong> - leverage types for better DX</li>
              <li><strong>Test your streaming</strong> - use browser dev tools to monitor SSE</li>
            </ul>
          </div>
        </div>

        {/* Environment Variables */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Environment Variables Required
          </h2>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <p className="text-yellow-800 dark:text-yellow-200 mb-4 font-semibold">
              These are already configured for the challenge:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">AWS_REGION</code></li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">AWS_ACCESS_KEY_ID</code></li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">AWS_SECRET_ACCESS_KEY</code></li>
              </ul>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">BEDROCK_AGENT_ID</code></li>
                <li><code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">BEDROCK_AGENT_ALIAS_ID</code></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Good luck!</h2>
          <p className="text-lg mb-2">
            We are excited to see your creative approach to this challenge.
          </p>
          <p className="text-sm opacity-75">
            For questions or clarifications, please reach out to the hiring team.
          </p>
        </div>
      </div>
    </div>
  );
}