'use client';

import { useEffect, useState } from 'react';
import SidebarMobile from './SidebarMobile';
import Sidebar from './Sidebar';

type Props = {};
const SidebarHandle = (props: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{isMobile ? <SidebarMobile /> : <Sidebar />}</>;
};

export default SidebarHandle;
