import React from 'react';
import { PiUserCircle } from 'react-icons/pi';
import { GiSelfLove } from 'react-icons/gi';
import { ChatMessage } from '../types/ChatMessage';

type Props = {
  message: ChatMessage;
};

const ChatMessage = ({ message }: Props) => {
  return (
    <div
      className={`py-5 ${
        message.author === 'ai'
          ? 'bg-space-gray-dark-500 dark:bg-space-gray-dark-700 text-left'
          : 'text-right bg-space-gray-dark-300'
      }`}
    >
      <div
        className={`flex max-w-2xl m-auto items-center mx-4 md:ml-4 rounded p-2${
          message.author === 'ai'
            ? 'bg-space-gray-light-500 text-secondary-yellow mr-4'
            : 'bg-space-gray-dark-800 text-white'
        }`}
      >
        {message.author === 'me' && <PiUserCircle size={24} />}
        {message.author === 'ai' && <GiSelfLove size={24} />}
        <div className={`flex-1 text-base whitespace-pre-wrap text-white`}>
          {message.body}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
