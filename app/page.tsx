'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import IntentCard from './components/intent-card';
import ChatInput from './components/chat-input';

export default function Home() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleCardClick = (message: string) => {
    setIsNavigating(true);
    // Navigate to chat with the pre-filled message
    router.push(`/chat?message=${encodeURIComponent(message)}`);
  };

  const handleSendMessage = (message: string) => {
    setIsNavigating(true);
    router.push(`/chat?message=${encodeURIComponent(message)}`);
  };

  const intentCards = [
    {
      title: 'Summarize Documentation',
      description:
        'Get concise summaries of OUAF documentation sections, technical guides, or implementation details.',
      message: 'Can you summarize the key concepts of OUAF architecture?',
      icon: (
        <svg
          className="w-5 h-5 text-secondary-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Batch Job Configuration',
      description:
        'Learn how to create, configure, and troubleshoot batch jobs in the OUAF framework.',
      message: 'How do I configure a new batch job in OUAF?',
      icon: (
        <svg
          className="w-5 h-5 text-secondary-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Code Examples',
      description:
        'Get practical code snippets and implementation examples for common OUAF development patterns.',
      message:
        'Show me code examples for implementing a custom business object in OUAF',
      icon: (
        <svg
          className="w-5 h-5 text-secondary-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'MVC Architecture',
      description:
        'Understand the Model-View-Controller pattern implementation within the OUAF framework.',
      message:
        'Explain the MVC pattern in OUAF and how to implement it properly',
      icon: (
        <svg
          className="w-5 h-5 text-secondary-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: 'Troubleshooting',
      description:
        'Get help diagnosing and solving common issues in OUAF development and deployment.',
      message: 'Help me troubleshoot common OUAF errors and performance issues',
      icon: (
        <svg
          className="w-5 h-5 text-secondary-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.34 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      ),
    },
    {
      title: 'Technical Q&A',
      description:
        'Ask specific technical questions about OUAF features, APIs, and best practices.',
      message: 'I have a technical question about OUAF implementation',
      icon: (
        <svg
          className="w-5 h-5 text-secondary-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-secondary-foreground text-xl font-bold">
              AI
            </span>
          </div>
          <h1 className="text-4xl font-bold text-card-foreground mb-2">
            OUAF Assistant
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your intelligent companion for Oracle Utilities Application
            Framework. Ask questions, get code examples, and learn best
            practices.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            What would you like to explore?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {intentCards.map((card, index) => (
              <IntentCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
                onClick={() => handleCardClick(card.message)}
              />
            ))}
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Or start a conversation
          </h3>
          <p className="text-muted-foreground text-center mb-6">
            Type your question below or select one of the topics above
          </p>

          <div className="max-w-2xl mx-auto">
            <ChatInput
              onSendMessage={handleSendMessage}
              disabled={isNavigating}
              placeholder="Ask about OUAF documentation, code examples, best practices..."
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Real-time Responses
            </h3>
            <p className="text-sm text-muted-foreground">
              Get instant answers with streaming responses for a smooth
              conversation experience
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-secondary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              OUAF Expertise
            </h3>
            <p className="text-sm text-muted-foreground">
              Specialized knowledge about Oracle Utilities Application Framework
              documentation and best practices
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-accent-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Code Examples
            </h3>
            <p className="text-sm text-muted-foreground">
              Get practical code snippets and implementation examples for your
              development needs
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
