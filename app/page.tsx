'use client';
import { useState } from 'react';
import ChatArea from './components/ChatArea';
import { Chat } from './types/Chat';
import ChatMessage from './components/ChatMessage';

const Home = () => {
  const [chatActive, setChatActive] = useState<Chat>({
    id: '1',
    messages: [
      { id: '1', author: 'ai', body: 'Hello, how can I help you?' },
      { id: '2', author: 'me', body: 'I need help' },
    ],
  });
  return (
    <main className="flex min-h-screen bg-space-purple-100 dark:bg-space-gray-dark-800 w-full">
      <section className="min-w-full">
        <ChatArea chat={chatActive} />
      </section>
    </main>
  );
};

export default Home;
