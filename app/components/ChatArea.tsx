import React from 'react';
import ChatPlaceholder from './ChatPlaceholder';
import ChatMessage from './ChatMessage';
import { Chat } from '../types/Chat';

type Props = {
  chat: Chat | undefined;
};

const ChatArea = ({ chat }: Props) => {
  return (
    <div className="flex-auto overflow-y-scroll styled-scrollbar justify-end">
      {!chat && <ChatPlaceholder />}
      {chat &&
        chat.messages.map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}
    </div>
  );
};

export default ChatArea;
