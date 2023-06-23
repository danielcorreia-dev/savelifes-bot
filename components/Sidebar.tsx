import React from 'react';

type SidebarItemProps = {
  title: string;
  icon: string;
  link: string;
};

type Props = {
  items: SidebarItemProps[];
};

const Sidebar = ({ items }: Props) => {
  return (
    <div className="w-32 h-screen bg-viol">
      <div></div>
    </div>
  );
};

export default Sidebar;
