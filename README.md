# OUAF Agent Design Challenge

This project provides a **minimal backend scaffold** for a design challenge.  
Frontend developers will build UI features (chat interface, streaming responses, error handling) on top of this backend.



## 🚀 Tech Stack

- **Next.js App Router**
- **TypeScript**
- **Tailwind CSS**
- **AWS Bedrock Agent Runtime** (`@aws-sdk/client-bedrock-agent-runtime`)
- **Vercel AI SDK (`ai`)** for optional streaming
- **No DB / No Auth** – simplified for challenge purposes



## 📂 Project Structure

```
lib/
 └─ agents/
      ├─ agent-factory.ts      # Delegates to the correct agent
      ├─ ouaf-agent.ts         # OUAF agent logic
      ├─ invoke-agent.ts       # Handles AWS Bedrock invocation
      ├─ stream-utils.ts       # Async generator for streaming (frontend can implement)
      ├─ client.ts             # Configures AWS Bedrock Agent client
      └─ errors.ts             # Standardized error & logging utilities
app/
 └─ api/
      └─ chat/
          └─ route.ts          # POST endpoint for sending messages to the agent
components/
 └─ Chat.tsx                   # Placeholder chat component (frontend to implement)
```



## ⚡ Quick Start

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Set Environment Variables

Create `.env.local`:

```
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=us-east-1

OUAF_AGENT_ID=your-agent-id
OUAF_AGENT_ALIAS_ID=your-agent-alias-id
```



## 💬 How the Chat Flow Works

1. **Frontend** sends a `POST` to `/api/chat` with `{ message }`
2. **API Route (`route.ts`)**:
   - Calls `agentFactory('ouaf', message)`
   - Returns JSON `{ response }` or `{ error }`
3. **Agent Factory** delegates to:
   - `invokeOuafAgent` → Non-streaming Bedrock invocation
   - `streamAgentResponse` → Optional streaming generator
4. **Frontend developer task:** implement streaming UI using `ReadableStream`



## ⚙️ Error Handling Pattern

We use a **layered pattern**:

- **Inner Layers (`invoke-agent.ts`, `ouaf-agent.ts`)**
  - Log the error with context using `logAgentError(agentType, err)`
  - Rethrow the error
- **Agent Factory (`agent-factory.ts`)**
  - Delegates calls and throws generic `Error` for unknown agent types
- **API Route (`/app/api/chat/route.ts`)**
  - Wraps all calls in `try/catch`
  - Formats a **safe frontend response** using:
    - `formatAgentError(err)`  
    - `agentErrors.general` as fallback

Example response to frontend:

```json
{ "error": "Something went wrong. Please try again." }
```

> **Note:** Full stack traces and context are logged on the server.  
> Frontend only sees safe, user‑friendly messages.



## 🔹 Logging Pattern

We use `logAgentEvent` and `logAgentError` to standardize logs:

```ts
logAgentEvent('ouaf', 'Incoming message', { message });
logAgentError('ouaf', err);
```

Log format:

```
[2025-08-05T14:30:00.000Z] [OUAF] Incoming message { message: "Hello" }
[2025-08-05T14:30:01.000Z] [OUAF ERROR] Error: Network timeout
```



## ⏩ Streaming (Optional for Frontend Dev)

- Backend provides `streamAgentResponse()` in `stream-utils.ts`  
- Returns an **async generator** yielding text chunks from Bedrock  
- Frontend dev can implement:

```ts
const res = await fetch('/api/chat', { method: 'POST', body: ... });
const reader = res.body.getReader();
```

- Then decode chunks progressively to update the UI



## 🎯 Design Challenge Tasks

1. Build a **creative chat UI** for OUAF agent  
2. Display **error messages gracefully**  
3. Implement **streaming chat responses** using the backend’s async generator  
4. Optional: Add **message history or session handling** in the frontend
