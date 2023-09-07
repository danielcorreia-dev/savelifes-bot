'use client';
import { useEffect, useState } from 'react';
import ChatArea from './components/ChatArea';
import { Chat } from '@/types/Chat';
import { Footer } from './components/Footer';
import { v4 as uuidv4 } from 'uuid';
import { DisclaimerPopup } from './components/DisclaimerPopup';

const Home = () => {
  const [AILoading, setAILoading] = useState<boolean>(false);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatList, setChatList] = useState<Chat>({ messages: [] });
  const [userId] = useState<string>(uuidv4());
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (AILoading) {
      getAIResponse();
    }
  }, [AILoading]);

  const getAIResponse = async () => {
    const chatListClone = { ...chatList };
    const userLastMessage =
      chatListClone.messages[chatListClone.messages.length - 1];

    let buddyLastMessage = { id: uuidv4(), author: 'ai', body: '' };
    if (chatListClone.messages.length > 1) {
      buddyLastMessage =
        chatListClone.messages[chatListClone.messages.length - 2];
    }

    let userPenultimateMessage = { id: userId, author: 'me', body: '' };
    if (chatListClone.messages.length > 2) {
      userPenultimateMessage =
        chatListClone.messages[chatListClone.messages.length - 3];
    }

    const response = await fetch('/api/buddy', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        id: userId,
        user_penultimate_message: userPenultimateMessage.body,
        buddy_last_message: buddyLastMessage.body,
        user_last_message: userLastMessage.body,
      }),
    });
    const data = await response.json();

    chatListClone.messages.push({
      id: uuidv4(),
      author: 'ai',
      body: data.content,
    });

    setChatList(chatListClone);
    setAILoading(false);
  };

  const handleSendMessage = (message: string) => {
    const chatListClone = { ...chatList };
    const id = uuidv4();
    chatListClone.messages.push({
      id,
      author: 'me',
      body: message,
    });
    setChatActiveId(id);
    setChatList(chatListClone);
    setAILoading(true);
  };

  return (
    <main className="flex min-h-screen">
      <DisclaimerPopup isOpen={isOpen} onClose={handleClose} />
      <section className="flex min-w-full flex-col">
        <ChatArea chat={chatList} loading={AILoading} />
        <Footer onSendMessage={handleSendMessage} disabled={AILoading} />
      </section>
    </main>
  );
};

export default Home;
