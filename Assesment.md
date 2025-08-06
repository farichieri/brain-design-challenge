# Red Clay Brain – Take-Home Design Challenge

**Duration:** 48 Hours  
**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, React, AWS Bedrock, Vercel

## 🎯 **Challenge Overview**

You are tasked with improving the oracle utilities assistant app. This agent will be able to help you out with any questions one might have on oracle docs for OUAF [Attach link]. The backend is already set up with a working API that can accept chat messages and return AI agent responses. Your job is to implement the frontend enhancements and streaming experience to make the app feel like a polished internal AI tool.

## 🏗️ **Existing Setup**

### **Backend API Ready**
- Backend exposes `/api/chat` with block and streaming support
- Fully functional AWS Bedrock Agent integration (This agent will only be accessible for 48 Hours)
- TypeScript interfaces and basic error handling for backend already implemented

### **Test the API**
You can test responses in Postman using JSON requests:

**Block Response (Testing):**
```json
POST http://localhost:3000/api/chat
{
  "agentType": "ouaf",
  "message": "Hello Brain",
  "stream": false
}
```

**Stream Response (UI Implementation):**
```json
POST http://localhost:3000/api/chat
{
  "agentType": "ouaf", 
  "message": "Tell me about Red Clay Brain",
  "stream": true
}
```

## 🎯 **Your Tasks**

### **Bare Minimum Requirements**

#### 1. **Streaming Chat Support (Frontend)**
- Convert the existing frontend chat screen to streaming responses using the `/api/chat` endpoint with `stream: true`
- Messages should appear in a typing animation style (word-by-word or chunk-by-chunk)
- Show a loading indicator while the agent is "thinking"
- Implement proper Server-Sent Events (SSE) handling for real-time updates

#### 2. **Centralized Error Handling**
- Implement a unified error toast/alert system for frontend errors
- Avoid silent failures

### **Creative / UX Challenge**

#### 1. **Design a UX-Friendly Home Screen**
- Show cards section with default chat intents such as: [Change this to OUAF specific content]
  - "Summarize Document"
  - "Get Project Status" 
  - "Explain Code Snippet"
  - "Brainstorm Ideas"
  - "Technical Q&A"
- Include a **chat input box** on the home screen:
  - Typing a message OR clicking a card → Navigates to the **dedicated chat page**
  - Smooth transition animations

#### 2. **Standard Chat Interface**
- Create a dedicated chat page that mimics **ChatGPT/Claude layout**:
  - Messages aligned for user vs AI
  - Full-screen scrollable history
  - Auto-scroll to latest message
  - Timestamp or agent name in the header
  - Clean message bubbles with proper spacing


### **Optional Bonus Points**

- **Reusable Components:** Design modular `ChatMessage`, `ChatInput`, and `Card` components to show clean code practices
- **Keyboard Shortcuts:** Enter to send, Escape to clear, etc.
- **Message Actions:** Copy message, retry failed messages
- **Theme Support:** Light/dark mode toggle
- **Accessibility:** ARIA labels, keyboard navigation, screen reader support

## 📋 **Rules & Expectations**

- **Try not to modify the existing backend** unless absolutely necessary
- **Use Next.js App Router** (already scaffolded)
- **Keep code modular and readable** – we want to see how you structure components and handle API interactions
- **Document any assumptions** or **future improvements** in your README
- **Do Not Over-Engineer:** Focus on **readability and UX polish** over building a massive state management layer

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+
- npm or yarn
- Code editor of your choice

### **Setup Instructions**
1. Clone or download the project - [Github URL]
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

### **Backend API Reference**

#### **Endpoints Available**
- `GET /api/health` - Health check
- `POST /api/agents` - Chat with AI agent

#### **Request Format**
```typescript
interface AgentRequest {
  message: string;
  agentType?: string; // defaults to "ouaf"
  stream?: boolean;   // false for block, true for streaming
}
```

#### **Response Formats**

**Block Response:**
```json
{
  "success": true,
  "data": "AI agent response text here...",
  "agentType": "ouaf",
  "timestamp": "2025-08-06T10:30:00.000Z"
}
```

**Stream Response (Server-Sent Events):**
```
event: start
data: {"type":"start","agentType":"ouaf"}

event: chunk  
data: {"type":"chunk","content":"Hello","timestamp":"..."}

event: chunk
data: {"type":"chunk","content":" there!","timestamp":"..."}

event: complete
data: {"type":"complete"}
```

## 📦 **Concluded Deliverables**

1. **Functional Next.js app** with:
   - Streaming chat support
   - Centralized frontend error handling  
   - Polished home page → chat flow with cards and mini input
   - Clean, readable component architecture

2. **Updated README.md** including:
   - Setup instructions (`npm install && npm run dev`)
   - Any known issues or future improvements
   - Architecture decisions and component structure
   - Assumptions made during development

## 📤 **Submission**

- **ZIP file** or **GitHub repository link** with your final code
- Ensure the app runs locally with `npm run dev` without extra config steps
- Include a brief demo video or screenshots (optional but appreciated)


## 🧠 **What We're Looking For**

This challenge tests your ability to:
- **Integrate with streaming APIs** and handle real-time data
- **Create polished user interfaces** with attention to UX details
- **Handle errors gracefully** with user-friendly feedback
- **Structure React applications** with clean, maintainable code
- **Work with existing backends** without over-engineering
- **Deliver within time constraints** while maintaining quality

## 💡 **Tips for Success**

- **Focus on user experience** - smooth animations and clear feedback
- **Handle edge cases** - network issues, empty states, loading states
- **Keep components small and focused** - easier to test and maintain
- **Use TypeScript effectively** - leverage types for better development experience
- **Test your streaming** - use the browser developer tools to monitor SSE connections

---

**Good luck! We're excited to see your creative approach to this challenge.** 🚀

For questions or clarifications, please reach out to the hiring team.