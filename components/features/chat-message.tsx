import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface ChatMessageProps {
  content: string;
  isUser: boolean;
  timestamp?: string;
  isStreaming?: boolean;
  onRetry?: () => void;
}

export default function ChatMessage({
  content,
  isUser,
  timestamp,
  isStreaming = false,
  onRetry,
}: ChatMessageProps) {
  const [showActions, setShowActions] = useState(false);
  const [displayedContent, setDisplayedContent] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Typewriter effect for streaming AI messages
  useEffect(() => {
    if (isUser) {
      setDisplayedContent(content);
      return;
    }

    // If content is longer than displayed, start typing animation
    if (content.length > displayedContent.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setDisplayedContent((prev) => {
          const nextChar = content[prev.length];
          return prev + (nextChar || '');
        });
      }, 15); // 15ms between characters for smooth typing

      return () => clearTimeout(timer);
    } else if (content.length === displayedContent.length && isTyping) {
      setIsTyping(false);
    }
  }, [content, displayedContent, isUser, isTyping]);

  // Reset when new message starts
  useEffect(() => {
    if (!isUser && content === '') {
      setDisplayedContent('');
      setIsTyping(false);
    }
  }, [content, isUser]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success('Message copied to clipboard');
    } catch (error) {
      console.error('Failed to copy message', error);
      toast.error('Failed to copy message');
    }
  };
  return (
    <div
      className={`group flex gap-3 p-4 ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
          <span className="text-secondary-foreground text-sm font-medium">
            AI
          </span>
        </div>
      )}

      <div className={`max-w-[70%] ${isUser ? 'order-first' : ''}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser
              ? 'bg-primary text-primary-foreground ml-auto'
              : 'bg-muted text-foreground'
          }`}
        >
          <div className="whitespace-pre-wrap">
            {displayedContent}
            {(isStreaming || isTyping) && (
              <span
                className="inline-block ml-0.5 text-current"
                style={{
                  animation: 'smooth-pulse 1.5s ease-in-out infinite',
                }}
              >
                ●
              </span>
            )}
          </div>
        </div>

        {timestamp && (
          <div
            className={`text-xs text-muted-foreground mt-1 ${
              isUser ? 'text-right' : 'text-left'
            }`}
          >
            {timestamp}
          </div>
        )}

        <div
          className={`flex gap-1 mt-2 transition-opacity duration-200 ${
            isUser ? 'justify-end' : 'justify-start'
          } ${showActions ? 'opacity-100' : 'opacity-0'}`}
        >
          <button
            onClick={handleCopy}
            className="p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Copy message"
            style={{ pointerEvents: showActions ? 'auto' : 'none' }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>

          {!isUser && onRetry ? (
            <button
              onClick={onRetry}
              className="p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Retry message"
              style={{ pointerEvents: showActions ? 'auto' : 'none' }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          ) : (
            <div className="w-6 h-6" />
          )}
        </div>
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground text-sm font-medium">U</span>
        </div>
      )}
    </div>
  );
}
