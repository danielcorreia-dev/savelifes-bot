import React from 'react';

type Props = {};

const ChatPlaceholder = (props: Props) => {
  return (
    <div className="mt-[20vh]">
      <h3 className="text-2xl font-bold text-center my-2 text-space-purple-100">
        Buddy Bot
      </h3>
      <p className="text-center text-space-gray-light-500">
        Você não está sozinho. 
      </p>
      <p className="text-center text-space-gray-light-500">
        Estou aqui para você.
      </p>
    </div>
  );
};

export default ChatPlaceholder;
