import { FC, useContext, useRef, useState } from 'react';
import { useAppSelector, useNavigate } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';
import { useAppDispatch } from '@hooks';
import { ViewContext } from '@context';
import { useLogoutMutation } from '@store/api/authApi';
import { IError } from '@interfaces';
import { localLogout } from '@store/reducers/authSlice';
import { selectSidebar } from '@store/reducers/sidebarSlice';
import Closed from './blocks/Closed/Closed';
import Opened from './blocks/Opened/Opened';

type AppLayoutProps = {
  children: FC;
};

const css = {
  container: `
    flex items-center justify-center relative min-h-[100vh]
  `,
  sidebar: `
    mr-auto h-[100vh] bg-white dark:bg-gray-900
    hidden lg:flex flex-col items-center rounded-tr-sm
    rounded-br-sm transition-width duration-300 relative
  `,
  displayComponent: `
    w-full min-h-[100vh] bg-neutral-200 dark:bg-indigo-950
  `
};

export const AppLayout: FC<AppLayoutProps> = ({ children: DisplayComponent }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const context = useContext(ViewContext);

  const theme = useAppSelector(selectTheme);
  const isSidebarOpen = useAppSelector(selectSidebar);

  const menuClosedButtonRef = useRef<HTMLDivElement>(null);
  const menuOpenedButtonRef = useRef<HTMLDivElement>(null);

  const [isCloseMenu, setIsCloseMenu] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const [logout] = useLogoutMutation();

  const handleLogOut = async () => {
    try {
      await logout({}).unwrap();
      dispatch(localLogout());
      navigate("/login");
    } catch (error) {
      const typedError = error as IError;
      console.error("Signup failed:", typedError);
      console.error("Signup failed:", error);
      context?.notification.show(typedError?.data?.error || typedError.message || 'An error occurred', 'error');
    };
  };

  if (!DisplayComponent) return false;

  return (
    <div className={`${css.container} ${theme === 'dark' ? 'dark' : ''}`}>
      <div className={`${css.sidebar} ${isSidebarOpen ? 'w-[18%]' : 'w-[5%]'}`}>
        {!isSidebarOpen ? (
          <Closed
            menuClosedButtonRef={menuClosedButtonRef}
            toggleMenu={() => setIsCloseMenu(!isCloseMenu)}
            isCloseMenu={isCloseMenu}
            handleLogOut={handleLogOut}
          />
        ) : (
          <Opened
            menuOpenedButtonRef={menuOpenedButtonRef}
            toggleMenu={() => setIsOpenMenu(!isOpenMenu)}
            isOpenMenu={isOpenMenu}
            handleLogOut={handleLogOut}
          />
        )}
      </div>

      <div className={css.displayComponent}>
        <DisplayComponent />
      </div>
    </div>
  );
};
