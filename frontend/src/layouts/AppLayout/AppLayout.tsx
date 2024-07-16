import { FC, useState } from 'react';
import { ColorModeButton } from '@components';
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';
import OpenSidebar from './blocks/OpenedSidebar';
import ClosedSidebar from './blocks/ClosedSidebar';

type AppLayoutProps = {
  children: FC;
};

export const AppLayout: FC<AppLayoutProps> = ({ children: DisplayComponent }) => {
  const theme = useAppSelector(selectTheme);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!DisplayComponent) return false;

  return (
    <div className={`
      min-h-[100vh]
      ${theme === 'dark' ? 'dark' : ''}
    `}>
      <div className={`
        bg-neutral-200 dark:bg-indigo-950
        flex items-center justify-center relative
      `}>
        <div
          className={`
            mr-auto min-h-[100vh] bg-indigo-950 dark:bg-neutral-200
            hidden lg:flex flex-col items-center py-4 rounded-tr-sm
            rounded-br-sm transition-width duration-300
            ${isSidebarOpen ? 'w-[12%]' : 'w-[5%]'}
          `}
        >
          {!isSidebarOpen ? (
            <ClosedSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          ) : (
            <OpenSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          )}
        </div>

       <div className='w-full min-h-[100vh]'>
          <DisplayComponent />
        </div>

        <div className="absolute right-3 bottom-3 z-10">
          <ColorModeButton theme={theme} />
        </div>
      </div>
    </div>
  );
};
