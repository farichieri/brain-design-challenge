'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ChatInput from '@/components/features/chat-input';
import ChatNavbar from '@/components/layout/chat-navbar';
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
  const router = useRouter();
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

  const handleClearChat = useCallback(() => {
    // Clear all state first
    clearMessages();
    initialMessageSent.current = false;

    // Use replace instead of push to avoid browser history issues
    // and use a small delay to ensure state is cleared first
    setTimeout(() => {
      router.replace('/chat');
    }, 50);
  }, [clearMessages, router]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClearChat();
      }
    },
    [handleClearChat]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-primary/5 via-transparent/5 to-transparent ">
      <ChatNavbar
        onClearChat={handleClearChat}
        showClearButton={true}
        onRetry={retryLastMessage}
        showRetryButton={!!error}
      />

      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-2 sm:px-4 lg:px-8 py-2 sm:py-4 lg:py-6">
        <div className="flex-1 flex flex-col relative">
          {/* Main chat container with modern frame */}
          <div className="flex-1 flex flex-col relative bg-background/50 backdrop-blur-lg border border-border/50 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 pointer-events-none" />

            <div
              className="flex-1 relative overflow-y-auto"
              role="log"
              aria-label="Chat messages"
              aria-live="polite"
            >
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center max-w-lg mx-auto p-4 sm:p-6 lg:p-8">
                    <div className="relative mb-6 sm:mb-8 flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur opacity-25 animate-pulse"></div>
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 rounded-2xl flex items-center justify-center">
                          <span className="text-primary text-xl sm:text-2xl font-bold">
                            AI
                          </span>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                      Welcome to OUAF Assistant
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed px-2">
                      I'm here to help you with Oracle Utilities Application
                      Framework questions. Ask me anything about documentation,
                      code examples, or best practices.
                    </p>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3 px-2">
                      <div className="p-3 bg-muted/50 border border-border/50 rounded-xl text-xs sm:text-sm text-muted-foreground">
                        "How do I configure a new batch job?"
                      </div>
                      <div className="p-3 bg-muted/50 border border-border/50 rounded-xl text-xs sm:text-sm text-muted-foreground">
                        "Explain the MVC pattern in OUAF"
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-2 sm:p-4">
                  {messages.map((message) => (
                    <ChatMessage
                      key={message.id}
                      content={message.content}
                      isUser={message.isUser}
                      timestamp={message.timestamp}
                      isStreaming={message.isStreaming}
                      onRetry={
                        !message.isUser
                          ? () => retryMessage(message.id)
                          : undefined
                      }
                    />
                  ))}

                  {isLoading && messages[messages.length - 1]?.isUser && (
                    <div className="flex gap-3 p-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary text-sm font-medium">
                          AI
                        </span>
                      </div>
                      <div className="bg-muted/80 backdrop-blur rounded-2xl px-4 py-3 border border-border/50">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:0ms] [animation-duration:1.2s]"></div>
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:150ms] [animation-duration:1.2s]"></div>
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:300ms] [animation-duration:1.2s]"></div>
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

            {/* Error notification */}
            {error && (
              <div className="absolute bottom-20 left-4 right-4 bg-destructive/10 backdrop-blur border border-destructive/20 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-destructive">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
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

            {/* Chat input section */}
            <div className="relative border-t border-border/50 bg-background/50 backdrop-blur p-3 sm:p-4 flex-shrink-0">
              <ChatInput
                onSendMessage={sendMessage}
                disabled={isLoading}
                placeholder="Ask about OUAF documentation, examples, or best practices..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
