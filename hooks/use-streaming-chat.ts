'use client';

import { useState, useCallback } from 'react';
import { toast } from 'sonner';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
  isStreaming?: boolean;
}

interface StreamChunk {
  type: 'start' | 'chunk' | 'complete' | 'error';
  content?: string;
  error?: string;
  timestamp?: string;
}

export function useStreamingChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addUserMessage = useCallback((content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    return userMessage;
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      if (isLoading) return;

      setError(null);
      setIsLoading(true);

      addUserMessage(content);
      const botMessageId = crypto.randomUUID();
      const botMessage: Message = {
        id: botMessageId,
        content: '',
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        isStreaming: true,
      };

      setMessages((prev) => [...prev, botMessage]);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: content,
            stream: true,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) {
          throw new Error('No response body');
        }

        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            // Si el stream termina sin evento 'complete', marcar como completo
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === botMessageId ? { ...msg, isStreaming: false } : msg
              )
            );
            break;
          }

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const data: StreamChunk = JSON.parse(line.slice(6));

                if (data.type === 'chunk' && data.content) {
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === botMessageId
                        ? { ...msg, content: msg.content + data.content }
                        : msg
                    )
                  );
                } else if (data.type === 'complete') {
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === botMessageId
                        ? { ...msg, isStreaming: false }
                        : msg
                    )
                  );
                } else if (data.type === 'error') {
                  throw new Error(data.error || 'Stream error occurred');
                }
              } catch (parseError) {
                console.error('Failed to parse SSE data:', parseError);
                console.warn('Failed to parse SSE data:', line);
              }
            }
          }
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Something went wrong';
        console.error('Chat error:', error);
        toast.error(`Failed to send message: ${errorMessage}`);
        setError(errorMessage);
        setMessages((prev) => prev.filter((msg) => msg.id !== botMessageId));
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, addUserMessage]
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  const retryLastMessage = useCallback(() => {
    if (messages.length < 2) return;

    const lastUserMessage = [...messages].reverse().find((msg) => msg.isUser);
    if (lastUserMessage) {
      setMessages((prev) => prev.filter((_, index) => index < prev.length - 1));
      sendMessage(lastUserMessage.content);
    }
  }, [messages, sendMessage]);

  const retryMessage = useCallback(
    (messageId: string) => {
      const messageIndex = messages.findIndex((msg) => msg.id === messageId);
      if (messageIndex === -1) return;

      const previousUserMessage = messages
        .slice(0, messageIndex)
        .reverse()
        .find((msg) => msg.isUser);

      if (previousUserMessage) {
        setMessages((prev) => prev.slice(0, messageIndex));
        sendMessage(previousUserMessage.content);
      }
    },
    [messages, sendMessage]
  );

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    retryLastMessage,
    retryMessage,
  };
}
