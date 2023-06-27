'use client';
import { useEffect, useState } from 'react';
import ChatArea from './components/ChatArea';
import { Chat } from '@/types/Chat';
import { Footer } from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [AILoading, setAILoading] = useState<boolean>(false);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatList, setChatList] = useState<Chat>({ messages: [] });

  useEffect(() => {
    if (AILoading) {
      getAIResponse();
    }
  }, [AILoading]);

  const getAIResponse = async () => {
    const chatListClone = { ...chatList };
    const lastMessage =
      chatListClone.messages[chatListClone.messages.length - 1];

    const response = await fetch('/api/buddy', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ message: lastMessage.body }),
    });
    const data = await response.json();

    chatListClone.messages.push({
      id: uuidv4(),
      author: 'ai',
      body: data.choices[0].text.trim(),
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
    <main className="flex min-h-screen ">
      <section className="flex min-w-full flex-col">
        <ChatArea chat={chatList} loading={AILoading} />
        <Footer onSendMessage={handleSendMessage} disabled={AILoading} />
      </section>
    </main>
  );
};

export default Home;
