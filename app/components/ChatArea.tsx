import React from 'react';
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
  return (
    <div className="h-0 flex-auto overflow-y-scroll">
      {messages.length === 0 && <ChatPlaceholder />}
      {messages &&
        messages.map((message) => (
          <ChatMessageItem message={message} key={message.id} />
        ))}
      {loading && <ChatMessageLoading />}
    </div>
  );
};

export default ChatArea;
