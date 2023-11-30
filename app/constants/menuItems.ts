import { IconType } from 'react-icons/lib';
import { LuGithub } from 'react-icons/lu';
import { MdChatBubbleOutline, MdMenuBook } from 'react-icons/md';

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
    name: 'Github',
    path: 'https://github.com/danielcorreia-dev/savelifes-bot/tree/main',
    icon: LuGithub,
  },
];

export default sidebarItems;
