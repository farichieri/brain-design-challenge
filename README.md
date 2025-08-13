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
  "message": "Hello, how can you help me?",
  "stream": false
}
```

**Stream Response (UI Implementation):**

```json
POST http://localhost:3000/api/chat
{
  "message": "Hello, how can you help me?",
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
  stream?: boolean; // false for block, true for streaming
}
```

#### **Response Formats**

**Block Response:**

```json
{
  "success": true,
  "data": "AI agent response text here...",
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

## **Styling Suggestions**

<aside>

Please treat everything below as _soft suggestions_ for how the chatbot should look. We want to provide some guidelines for how the app will look, but if you have suggestions or recommendations, **do not shy away** from making them. Your creativity should precede guidelines in this challenge.

</aside>

## Visual Design

### Colors

### Red Clay Brand Palette

| Color Role           | Hex Code | Name     | Characteristics                 |
| -------------------- | -------- | -------- | ------------------------------- |
| **Primary Accent**   | #9B2D1F  | Clay Red | Bold, warm, confident           |
| **Body**             | #272525  | Charcoal | Strong, grounded, sophisticated |
| **Secondary Accent** | #6B8383  | Sage     | Calming, balanced, trustworthy  |
| **Tertiary**         | #AFAC7F  | Sand     | Warm, approachable, natural     |

### Extended Palette

| Color           | Hex Code | Notes                            |
| --------------- | -------- | -------------------------------- |
| **White**       | #FFFFFF  | Pure white for contrast          |
| **Off-White**   | #FAFAF8  | Softer alternative to pure white |
| **Light Gray**  | #F5F5F3  | Subtle backgrounds               |
| **Medium Gray** | #8B8989  | Secondary text (45% of Body)     |
| **Success**     | #6B8383  | Can use Secondary Accent         |
| **Warning**     | #AFAC7F  | Can use Tertiary                 |
| **Error**       | #9B2D1F  | Can use Primary Accent           |

### Gradient Suggestions

**Primary Gradient:** Linear gradient from Clay Red (#9B2D1F) to a deeper shade (#7A241A)

- Great for CTAs, headers, emphasis elements

**Secondary Gradient:** Sage (#6B8383) to Sand (#AFAC7F)

- Subtle, calming backgrounds
- Perfect for bot message bubbles

**Warm Gradient:** Sand (#AFAC7F) to warm white (#FFF9F5)

- Soft backgrounds, welcome screens

**Dark Gradient:** Charcoal (#272525) to lighter charcoal (#3A3838)

- Premium feel, night mode options

### Design Freedom

You have creative freedom to mix and mash the color palette above dependent on your view of:

- User testing and accessibility requirements
- Visual hierarchy needs
- Brand expression opportunities
- Emotional responses desired

Consider using:

- **Gradients** for depth and visual interest
- **Color overlays** with transparency for layering
- **Tints and shades** of the core palette for variety

### Typography

### Font Stack

```
Primary: 'Manrope'
Monospace: 'JetBrains Mono', 'SF Mono', 'Courier New'

Google Fonts Import:
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Suggested Size Scale

- **Chat messages:** 16px (1rem) - Optimal reading size
- **Timestamps:** 12px (0.75rem) - De-emphasized
- **Header/Bot name:** 18px (1.125rem) - Slightly prominent
- **Buttons:** 14px (0.875rem) - Compact but readable
- **Input field:** 16px (1rem) - Matches message size

### Spacing System

**Base Unit: 8px** - All spacing uses multiples of 8

### Component Spacing

- **Between messages:** 16px gap
- **Message padding:** 12px horizontal, 8px vertical
- **Avatar to message:** 8px gap
- **Chat window padding:** 24px
- **Button padding:** 12px horizontal, 8px vertical
- **Input field padding:** 16px

### Visual Rhythm

```
Extra Small (XS): 4px  - Tight spacing
Small (S):        8px  - Between related elements
Medium (M):      16px  - Standard gap
Large (L):       24px  - Section spacing
Extra Large (XL): 32px  - Major sections

```

## 💬 Conversational Design

### Bot Personality

### Voice Characteristics

- **Friendly but professional** - Like a knowledgeable colleague.
- **Use contractions** - "I'll" instead of "I will" for warmth.
- **Active voice** - "I can help you with..." not "You can be helped...".
- **Concise** - Aim for 2-3 sentence responses when possible.

### Conversation Starters

```
First time: "Howdy [Name], what are we working on today?"

Returning:  "Welcome back, [Name] How can I help you today?"
```

### Response Patterns

### Standard Responses

| Situation         | Example Response                                                                      |
| ----------------- | ------------------------------------------------------------------------------------- |
| **Greeting**      | "Hello! How can I help you today?"                                                    |
| **Processing**    | "Let me look that up for you..."                                                      |
| **Clarification** | "I want to make sure I understand - are you asking about...?"                         |
| **Success**       | "Great! I've successfully [action]. Anything else?"                                   |
| **Apology**       | "I apologize for the confusion. Let me try again..."                                  |
| **Handoff**       | "I’m not sure, I would reach out to [person name] for a better answer, to be honest." |

### Error Messages (Rotate these)

1. "Hmm, I didn't quite catch that. Could you rephrase?"
2. "I'm not sure I understand. Can you tell me more?"
3. "Let me make sure I understand what you're looking for..."

### Visual Feedback

### Typing Indicator

```
● ● ●  (Animated dots, 400ms intervals)
```

### Loading States

- Skeleton screens for content loading
- Subtle pulse animation on processing
- "pondering..." text for complex queries

### Timestamps

- Show on hover or after 5 minute gaps
- Format: "2:30 PM" for today, "Yesterday 2:30 PM" for previous days
- Color: Medium gray (#666666)
- Size: 12px

## 📋 Quick Reference

### Do's ✅

- Keep messages concise
- Use emojis sparingly (1 per message max)
- Provide clear next steps
- Acknowledge user input immediately
- Show typing indicator for responses over 2 seconds

### Don'ts ❌

- Don't use ALL CAPS (feels like shouting)
- Avoid jargon without explanation
- Don't blame the user for errors
- Never pretend to be human
- Avoid walls of text

### Accessibility Minimums

- **Color contrast:** 4.5:1 minimum
- **Touch targets:** 44×44px minimum
- **Focus indicators:** Always visible
- **Text sizing:** Supports 200% zoom
- **Keyboard navigation:** Full support

---

**Good luck! We're excited to see your creative approach to this challenge.** 🚀

For questions or clarifications, please reach out to the hiring team.

---

# 🎯 **Implementation Documentation**

## 🚀 **Setup Instructions**

### **Prerequisites**

- Node.js 18+
- npm (or yarn/bun)

### **Quick Start**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### **Environment Variables**

Create a `.env` file with your AWS Bedrock credentials:

```env
AWS_REGION=your-region
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
BEDROCK_AGENT_ID=your-agent-id
BEDROCK_AGENT_ALIAS_ID=your-alias-id
```

## 🏗️ **Architecture Decisions**

### **Project Structure**

```
📂 Project Root/
├── 📂 app/                    # Next.js App Router
│   ├── 📄 page.tsx           # SSR Home page
│   ├── 📄 chat/page.tsx      # Client Chat page
│   ├── 📄 layout.tsx         # Root layout
│   └── 🎨 globals.css        # Global styles
├── 📂 components/             # Shared components
│   ├── 📂 ui/                # Basic UI components
│   │   ├── icons.tsx         # SVG icon functions
│   │   ├── icon.tsx          # Icon wrapper
│   │   └── theme-toggle.tsx  # Theme switcher
│   ├── 📂 layout/            # Layout components
│   │   ├── navbar.tsx        # Navigation
│   │   ├── hero-section.tsx  # Hero section
│   │   └── footer.tsx        # Footer
│   ├── 📂 features/          # Feature components
│   │   ├── chat-message.tsx  # Chat message with actions
│   │   ├── chat-input.tsx    # Chat input
│   │   ├── intent-card.tsx   # Intent cards
│   │   └── feature-card.tsx  # Feature cards
│   └── 📂 sections/          # Page sections
│       ├── intent-cards-section.tsx
│       ├── conversation-section.tsx
│       └── features-section.tsx
├── 📂 hooks/                  # Custom React hooks
│   ├── use-streaming-chat.ts # Chat logic
│   └── use-is-mounted.ts     # Hydration safety
├── 📂 constants/              # App constants
│   └── landing.ts            # Landing page content
└── 📂 providers/              # Context providers
    └── theme-provider.tsx    # Theme context
```

### **Key Technical Choices**

#### **1. Next.js Architecture**

- **Server-Side Rendering (SSR)** for home page performance
- **Client Components** only where interactivity is needed
- **App Router** with modern file-based routing
- **Components outside app/** following Next.js 13+ best practices

#### **2. Component Architecture**

- **Modular Design** with clear separation of concerns:
  - `ui/` - Basic reusable components
  - `layout/` - Page structure components
  - `features/` - Business logic components
  - `sections/` - Complete page sections
- **DRY Principle** with centralized constants and reusable components
- **TypeScript** for complete type safety

#### **3. Streaming Implementation**

- **Server-Sent Events (SSE)** for real-time message streaming
- **Custom hook** (`useStreamingChat`) for state management
- **Fallback handling** to prevent stuck streaming indicators
- **Real-time typing animation** with smooth cursor effects

#### **4. Styling System**

- **Tailwind CSS v4** with HSL custom properties
- **Red Clay brand palette** mapped to semantic design tokens
- **Modern minimalist AI design** (2025 style)
- **Responsive design** with mobile-first approach
- **Dark/Light theme** support with next-themes

#### **5. State Management**

- **React useState** for local component state
- **Custom hooks** for reusable logic encapsulation
- **No external state library** to keep bundle size minimal
- **Client-side navigation** with smooth transitions

#### **6. Developer Experience**

- **Clean import paths** with organized folder structure
- **Icon system** with individual SVG function components
- **Centralized constants** for easy content management
- **Consistent naming** with PascalCase components

#### **7. Error Handling & UX**

- **Sonner toast library** for centralized notifications
- **Graceful degradation** for API failures
- **User-friendly error messages** with retry functionality
- **Loading states** and smooth transitions

#### **8. Accessibility**

- **ARIA labels** for screen readers
- **Keyboard navigation** support (Tab, Enter, Escape)
- **Focus management** with visible indicators
- **Semantic HTML** structure throughout

## 🎨 **UX Design Decisions**

### **Modern AI Landing Page (2025 Style)**

- **Large gradient typography** for visual impact
- **Minimalist design** with generous white space
- **Subtle background decorations** with blur effects
- **Intent cards** with hover animations and micro-interactions
- **Hero section** with AI branding and gradient text
- **Features section** with animated icons and smooth transitions

### **Navigation & Layout**

- **Modern backdrop-blur navbar** with floating design
- **Responsive navigation** with optimal mobile experience
- **Consistent footer** across all pages
- **Smooth page transitions** and loading states

### **Chat Interface**

- **ChatGPT-inspired layout** for familiarity
- **Message actions** (copy, retry) appearing on hover
- **Smooth streaming animation** with custom pulse cursor
- **Auto-scroll** to latest messages
- **Real-time typing indicators** during AI responses

### **Interactive Elements**

- **Micro-animations** on hover and focus states
- **Gradient buttons** with smooth state transitions
- **Card hover effects** with scale and shadow changes
- **Theme toggle** with smooth color transitions

### **Theme & Branding**

- **Red Clay brand palette** with semantic color mapping
- **Light/dark mode** with system preference detection
- **Consistent iconography** with custom SVG components
- **Typography hierarchy** with clear visual distinction

## 🔧 **Known Issues & Future Improvements**

### **Current Limitations**

1. **No Message Persistence**: Messages are lost on page refresh
2. **No User Sessions**: Each visit starts fresh
3. **Limited Error Recovery**: Some edge cases need handling

### **Potential Enhancements**

1. **LocalStorage Persistence**: Save chat history locally
2. **Message Search**: Find previous conversations
3. **Export Functionality**: Download chat as PDF/text
4. **Real-time Typing Indicators**: Show when AI is composing
5. **Message Reactions**: Thumbs up/down for feedback

## 📊 **Implementation Stats**

### **Requirements Completion**

#### **Core Requirements:**

- ✅ **Streaming Chat Support** - SSE with real-time typing animation
- ✅ **Centralized Error Handling** - Sonner toast notifications
- ✅ **UX-Friendly Home Screen** - Modern AI design with intent cards
- ✅ **Standard Chat Interface** - ChatGPT-style layout with actions

#### **Bonus Features Implemented:**

- ✅ **Reusable Components** - Modular 4-tier architecture
- ✅ **Keyboard Shortcuts** - Enter, Escape, Tab navigation
- ✅ **Message Actions** - Copy, retry with smooth animations
- ✅ **Theme Support** - Dark/light mode with system detection
- ✅ **Accessibility** - Complete ARIA support and keyboard navigation
- ✅ **Modern Design** - 2025 AI minimalist styling
- ✅ **SSR Performance** - Server-side rendering for home page
- ✅ **Mobile Responsive** - Optimized for all screen sizes

### **Architecture Quality**

- ✅ **TypeScript 100%** - Complete type safety
- ✅ **DRY Principle** - Centralized constants and reusable components
- ✅ **Clean Architecture** - 4-tier component organization
- ✅ **Performance** - SSR, client-side optimization, minimal bundle
- ✅ **Developer Experience** - Organized structure, clear imports
- ✅ **Scalable Design** - Easy to extend and maintain

### **Technical Metrics**

- **Components**: 13 organized in 4 logical categories
- **Custom Hooks**: 2 for reusable logic
- **Pages**: 2 (SSR home + client chat)
- **TypeScript Coverage**: 100%
- **Bundle Size**: Optimized with tree-shaking
- **Performance**: Fast SSR + progressive enhancement

## 🧠 **Development Assumptions**

1. **Backend Stability**: Assumed AWS Bedrock agent is reliable
2. **Modern Browsers**: Targeted ES2020+ features
3. **No Database**: Used in-memory state for simplicity
4. **Single User**: No multi-user or authentication considerations
5. **English Content**: UI text and error messages in English
6. **Desktop First**: Optimized for desktop, mobile-friendly
7. **Development Environment**: Local development with hot reload

---

**Implementation completed by Fabricio Richieri - Aug 12, 2025**
