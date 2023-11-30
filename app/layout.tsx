import './globals.css';
import { Inter } from 'next/font/google';
import SidebarHandler from './components/SidebarHandler';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Buddy Bot - Estou aqui para você',
  description:
    'Buddy Bot, um assistente virtual provê apoio emocional aos usuários',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div>
            <SidebarHandler />
          </div>
          <div className="md:ml-[76px] bg-white dark:bg-space-gray-dark-700 h-screen">
            <div className="">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
