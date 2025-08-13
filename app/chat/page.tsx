'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import ChatInput from '@/components/features/chat-input';
import Navbar from '@/components/layout/navbar';
import { useStreamingChat } from '@/hooks/use-streaming-chat';
import ChatMessage from '@/components/features/chat-message';

export default function ChatPage() {
  const {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    retryLastMessage,
    retryMessage,
  } = useStreamingChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const initialMessageSent = useRef(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const messageFromUrl = searchParams.get('message');
    if (
      messageFromUrl &&
      messages.length === 0 &&
      !initialMessageSent.current
    ) {
      initialMessageSent.current = true;
      sendMessage(messageFromUrl);
    }
  }, [searchParams, messages.length, sendMessage]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearMessages();
        initialMessageSent.current = false;
      }
    },
    [clearMessages]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="flex flex-col flex-1 bg-background">
      <Navbar
        onClearChat={() => {
          clearMessages();
          initialMessageSent.current = false;
        }}
        showClearButton={true}
        onRetry={retryLastMessage}
        showRetryButton={!!error}
      />

      <div
        className="flex-1 overflow-y-auto pt-4"
        role="log"
        aria-label="Chat messages"
        aria-live="polite"
      >
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center max-w-md mx-auto p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground text-xl font-bold">
                  AI
                </span>
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Welcome to OUAF Assistant
              </h2>
              <p className="text-muted-foreground mb-4">
                I'm here to help you with Oracle Utilities Application Framework
                questions. Ask me anything about documentation, code examples,
                or best practices.
              </p>
              <div className="text-sm text-muted-foreground">
                Try asking: "How do I configure a new batch job?" or "Explain
                the MVC pattern in OUAF"
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                content={message.content}
                isUser={message.isUser}
                timestamp={message.timestamp}
                isStreaming={message.isStreaming}
                onRetry={
                  !message.isUser ? () => retryMessage(message.id) : undefined
                }
              />
            ))}

            {isLoading && messages[messages.length - 1]?.isUser && (
              <div className="flex gap-3 p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground text-sm font-medium">
                    AI
                  </span>
                </div>
                <div className="bg-muted rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:0ms] [animation-duration:1.2s]"></div>
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:150ms] [animation-duration:1.2s]"></div>
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:300ms] [animation-duration:1.2s]"></div>
                    </div>
                    <span className="text-sm">
                      OUAF Assistant is thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {error && (
        <div className="bg-destructive/10 border-t border-destructive/20 p-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-destructive">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">{error}</span>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="text-sm text-destructive hover:underline"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )}

      <div className="p-3 md:p-4 border-t border-border/30">
        <ChatInput
          onSendMessage={sendMessage}
          disabled={isLoading}
          placeholder="Ask about OUAF documentation, examples, or best practices..."
        />
      </div>
    </div>
  );
}
