'use client';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import sidebarItems from '../constants/menuItems';
import Link from 'next/link';

type Props = {};

const SidebarMobile = (props: Props) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="fixed bg-space-purple-900 dark:bg-space-gray-800 w-full">
      <section className="px-6 py-2">
        <nav className="w-max transition-transform">
          <div className={`${active && 'mb-4'}`}>
            <MdMenu
              className="text-space-purple-100"
              size={28}
              onClick={() => setActive(!active)}
            />
          </div>
          <AnimatePresence>
            {active && (
              <motion.ul
                className="flex flex-col transition-transform"
                transition={{ ease: 'easeInOut' }}
              >
                {sidebarItems.map(({ name, path, icon: Icon }, index) => {
                  return (
                    <li
                      key={index}
                      className={`text-space-purple-100 hover:text-secondary-yellow transition-colors transition-150 cursor-pointer flex items-center h-12 w-full `}
                    >
                      <Link
                        href={path}
                        target={
                          index === sidebarItems.length - 1 ? '_blank' : ''
                        }
                        className={`flex items-center h-12 w-full `}
                      >
                        <Icon size={28} />
                        <span className="ml-2">{name}</span>
                      </Link>
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </section>
    </div>
  );
};

export default SidebarMobile;
