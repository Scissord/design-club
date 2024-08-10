import { FC, RefObject } from 'react'
import ClosedSidebar from './ClosedSidebar';
import ClosedUserOptions from './ClosedUserOptions';

type ClosedProps = {
  menuClosedButtonRef: RefObject<HTMLDivElement>;
  toggleMenu: () => void;
  isCloseMenu: boolean;
  handleLogOut: () => void;
};

const Closed: FC<ClosedProps> = (props) => {
  const {
    menuClosedButtonRef,
    toggleMenu,
    isCloseMenu,
    handleLogOut
  } = props;

  return (
    <>
      <ClosedSidebar
        menuClosedButtonRef={menuClosedButtonRef}
        toggleMenu={() => toggleMenu()}
      />
      <ClosedUserOptions
        isCloseMenu={isCloseMenu}
        toggleMenu={() => toggleMenu()}
        menuClosedButtonRef={menuClosedButtonRef}
        handleLogOut={handleLogOut}
      />
    </>
  );
};

export default Closed