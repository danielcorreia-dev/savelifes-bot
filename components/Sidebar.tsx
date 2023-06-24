'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, transform } from 'framer-motion';
import { MdChatBubbleOutline, MdMenuBook } from 'react-icons/md';
import { LuGithub } from 'react-icons/lu';
import { IconType } from 'react-icons';
import Link from 'next/link';
import classNames from 'classnames';

type SidebarItem = {
  name: string;
  path: string;
  icon: IconType;
};

const sidebarItems: SidebarItem[] = [
  {
    name: 'Chat',
    path: '/',
    icon: MdChatBubbleOutline,
  },
  {
    name: 'About us',
    path: '/about-us',
    icon: MdMenuBook,
  },
  {
    name: 'Github',
    path: 'https://github.com/danielcorreia-dev/savelifes-bot/tree/main',
    icon: LuGithub,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const showAnimation = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      whileHover={{
        width: 200,
        transition: { duration: 0.3 },
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="fixed overflow-scroll bg-slate-800 h-screen no-scrollbar"
    >
      <aside className="px-4 py-6">
        <nav className="flex w-max">
          <ul className="flex-col items-center min-w-full">
            {sidebarItems.map(({ name, path, icon: Icon }, index) => (
              <li
                key={index}
                className="hover:text-secondary-yellow transition-colors transition-150 cursor-pointer flex items-center h-20 w-full"
              >
                <Link href={path} className="flex items-center h-20 w-full">
                  <Icon size={28} className="mr-4" />
                  {active && (
                    <motion.span
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                    >
                      {name}
                    </motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </motion.div>
  );
};

export default Sidebar;
