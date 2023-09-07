import React, { useEffect, useRef } from 'react';
import { ChatMessage } from '@/types/ChatMessage';
import IconUser from './icons/IconUser';
import IconUserHeartLine from './icons/IconUserHeart';
import { TypeAnimation } from 'react-type-animation';

interface Props {
  message: ChatMessage;
  handleScroll: () => void;
}

export const ChatMessageItem = ({ message, handleScroll }: Props) => {
  const typeAnimationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver(handleScroll);
    if (typeAnimationRef.current) {
      observer.observe(typeAnimationRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [handleScroll]);

  return (
    <div className={`py-5 ${message.author === 'ai' && 'bg-gray-600/20'}`}>
      <div className="m-auto flex max-w-4xl text-white">
        <div
          className={`mx-4 flex h-10 w-10 items-center justify-center rounded md:ml-0 ${
            message.author === 'ai'
              ? 'bg-secondary-yellow'
              : 'bg-space-purple-400'
          }`}
        >
          {message.author === 'me' && <IconUser width={24} height={24} />}
          {message.author === 'ai' && (
            <IconUserHeartLine width={24} height={24} />
          )}
        </div>
        {message.author === 'ai' ? (
          <TypeAnimation
            speed={90}
            cursor={false}
            sequence={[message.body, 1000]}
            className={`flex-1 whitespace-pre-wrap text-base animate-type will-change-auto`}
            ref={typeAnimationRef}
          >
            {message.body}
          </TypeAnimation>
        ) : (
          <div className="flex-1 whitespace-pre-wrap">{message.body}</div>
        )}
      </div>
    </div>
  );
};
