import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import IconSend from './icons/IconSend';

type Props = {
  disabled: boolean;
  onSend: (message: string) => void;
};

export const ChatMessageInput = ({ disabled, onSend }: Props) => {
  const [text, setText] = useState('');
  const textEl = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textEl.current) {
      textEl.current.focus();
    }
  }, [disabled]);

  useEffect(() => {
    if (textEl.current) {
      textEl.current.style.height = '0px';
      const scrollHeight = textEl.current.scrollHeight;
      textEl.current.style.height = scrollHeight + 'px';
    }
  }, [text, textEl]);

  const handleTextKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code.toLowerCase() === 'enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (!disabled && text.trim() !== '') {
      onSend(text);
      setText('');
    }
  };

  return (
    <div
      className={`flex rounded-md border-gray-800/50 bg-space-gray-dark-800 p-2 ${
        disabled && 'opacity-50'
      }`}
    >
      <textarea
        ref={textEl}
        autoFocus
        className="my-2 ml-2 h-7 max-h-48 flex-1 resize-none overflow-y-auto border-0 bg-transparent outline-none text-space-gray-light-100"
        placeholder="Digite uma mensagem"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleTextKeyUp}
        disabled={disabled}
      ></textarea>

      <div
        onClick={handleSendMessage}
        className={`cursor-pointer self-end rounded p-3 transition-colors ${
          text.length
            ? 'opacity-100 hover:bg-black/20 text-space-purple-400'
            : 'opacity-20'
        }`}
      >
        <IconSend height={14} width={14} />
      </div>
    </div>
  );
};
