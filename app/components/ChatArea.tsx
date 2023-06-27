import React, { useEffect, useRef, useState } from 'react';
import { Chat } from '@/types/Chat';
import { ChatMessageItem } from './ChatMessageItem';
import ChatPlaceholder from './ChatPlaceholder';
import { ChatMessageLoading } from './ChatMessageLoading';

type Props = {
  chat: Chat | undefined;
  loading: boolean;
};

const ChatArea = ({ chat, loading }: Props) => {
  const { messages } = chat || { messages: [] };
  const scrollArea = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    scrollArea.current?.scrollTo({
      top: scrollArea.current?.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    handleScroll();
  }, [loading, chat?.messages?.length]);

  return (
    <div ref={scrollArea} className="h-0 flex-auto overflow-y-scroll">
      {messages.length === 0 && <ChatPlaceholder />}
      {messages.map((message) => (
        <ChatMessageItem
          message={message}
          key={message.id}
          handleScroll={handleScroll}
        />
      ))}
      {loading && <ChatMessageLoading />}
    </div>
  );
};

export default ChatArea;
