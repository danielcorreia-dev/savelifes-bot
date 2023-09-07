'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import sidebarItems from '../constants/menuItems';

const Sidebar = () => {
  const pathname = usePathname();
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
      className="fixed overflow-scroll bg-space-purple-900 dark:bg-space-gray-dark-800 h-screen no-scrollbar"
    >
      <aside className="px-6 py-6">
        <nav className="flex w-max">
          <ul className="flex-col items-center min-w-full">
            {sidebarItems.map(({ name, path, icon: Icon }, index) => {
              const pathActive = pathname === path;
              return (
                <li
                  key={index}
                  className={`text-space-purple-100 hover:text-secondary-yellow transition-colors transition-150 cursor-pointer flex items-center h-20 w-full `}
                >
                  <Link
                    href={path}
                    target={index === sidebarItems.length - 1 ? '_blank' : ''}
                    className={`flex items-center h-20 w-full ${
                      pathActive && 'text-secondary-yellow'
                    }`}
                  >
                    <Icon size={28} />
                    {active && (
                      <motion.span
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        className="ml-4"
                      >
                        {name}
                      </motion.span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </motion.div>
  );
};

export default Sidebar;
