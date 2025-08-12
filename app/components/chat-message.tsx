interface ChatMessageProps {
  content: string;
  isUser: boolean;
  timestamp?: string;
  isStreaming?: boolean;
}

export default function ChatMessage({
  content,
  isUser,
  timestamp,
  isStreaming = false,
}: ChatMessageProps) {
  return (
    <div
      className={`flex gap-3 p-4 ${isUser ? 'justify-end' : 'justify-start'}`}
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
            {content}
            {isStreaming && (
              <span className="inline-block w-2 h-5 bg-current ml-1 animate-pulse" />
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
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <span className="text-primary-foreground text-sm font-medium">U</span>
        </div>
      )}
    </div>
  );
}
