import { FC, RefObject } from 'react'
import OpenedSidebar from './OpenedSidebar';
import OpenedUserOptions from './OpenedUserOptions';

type OpenedProps = {
  menuOpenedButtonRef: RefObject<HTMLDivElement>;
  toggleMenu: () => void;
  isOpenMenu: boolean;
  handleLogOut: () => void;
};

const Opened: FC<OpenedProps> = (props) => {
  const {
    menuOpenedButtonRef,
    toggleMenu,
    isOpenMenu,
    handleLogOut
  } = props;

  return (
    <>
      <OpenedSidebar
        menuOpenedButtonRef={menuOpenedButtonRef}
        toggleMenu={() => toggleMenu()}
      />
      <OpenedUserOptions
        isOpenMenu={isOpenMenu}
        toggleMenu={() => toggleMenu()}
        menuOpenedButtonRef={menuOpenedButtonRef}
        handleLogOut={handleLogOut}
      />
    </>
  );
};

export default Opened