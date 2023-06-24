import ChatInput from '@/components/ChatInput';

export const metadata = {
  title: 'Savelives - Chatbot',
};
const Home = () => {
  return (
    <div className="relative flex h-full max-w-full flex-1 overflow-hidden">
      <div className="flex h-full max-w-full flex-1 flex-col">
        <main className="relative h-full w-full transition-width flex flex-col overflow-auto items-stretch flex-1">
          <div className="absolute">
            <ChatInput />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
