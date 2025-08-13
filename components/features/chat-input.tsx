'use client';

import { useState, KeyboardEvent } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export default function ChatInput({
  onSendMessage,
  disabled = false,
  placeholder = 'Ask the OUAF assistant anything...',
}: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="relative">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
            className="w-full resize-none bg-background/80 backdrop-blur border border-border/50 rounded-2xl px-3 sm:px-4 py-3 sm:py-4 pr-12 sm:pr-14 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px] sm:min-h-[52px] md:min-h-[56px] max-h-32 shadow-sm transition-all duration-200"
            aria-label="Type your message"
            aria-describedby="send-button"
            style={{
              scrollbarWidth: 'thin',
            }}
          />

          <button
            id="send-button"
            onClick={handleSubmit}
            disabled={disabled || !message.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-primary/90 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-sm"
            aria-label="Send message"
          >
            <svg
              width="16"
              height="16"
              className="sm:w-[18px] sm:h-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </div>
      </div>

      {/* Subtle hint */}
      <div className="flex items-center justify-between mt-2 px-1">
        <div className="text-xs text-muted-foreground hidden sm:block">
          Press{' '}
          <kbd className="px-1.5 py-0.5 bg-muted/50 border border-border/50 rounded text-xs">
            Enter
          </kbd>{' '}
          to send,{' '}
          <kbd className="px-1.5 py-0.5 bg-muted/50 border border-border/50 rounded text-xs">
            Shift + Enter
          </kbd>{' '}
          for new line
        </div>
        <div className="text-xs text-muted-foreground sm:hidden">
          Tap to send • {message.length}/2000
        </div>
        <div className="text-xs text-muted-foreground hidden sm:block">
          {message.length}/2000
        </div>
      </div>
    </div>
  );
}
