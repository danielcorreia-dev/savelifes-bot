import { ChatMessageInput } from './ChatInputMessage';

type Props = {
  disabled: boolean;
  onSendMessage: (message: string) => void;
};

export const Footer = ({ disabled, onSendMessage }: Props) => {
  return (
    <footer className="w-full px-6 md:p-2 mb-[8vh] py-4">
      <div className="m-auto max-w-4xl">
        <ChatMessageInput disabled={disabled} onSend={onSendMessage} />
      </div>
    </footer>
  );
};
