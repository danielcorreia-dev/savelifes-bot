import React from 'react';

type Props = {};

const ChatInput = (props: Props) => {
  return (
    <div className="flex items-center bg-gray-100 p-4">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-grow mr-4 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
