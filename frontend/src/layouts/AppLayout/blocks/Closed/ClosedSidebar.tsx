import { FC, RefObject } from "react";
import ClosedSidebarTop from "./ClosedSidebar/ClosedSidebarTop";
import ClosedSidebarMiddle from "./ClosedSidebar/ClosedSidebarMiddle";
import ClosedSidebarBottom from "./ClosedSidebar/ClosedSidebarBottom";

type ClosedSidebarProps = {
  menuClosedButtonRef: RefObject<HTMLDivElement>;
  toggleMenu: () => void;
};

const css = {
  container: `
    w-full h-full flex flex-col
    items-center py-4 overflow-hidden
  `,
};

const ClosedSidebar: FC<ClosedSidebarProps> = (props) => {
  const { menuClosedButtonRef, toggleMenu } = props;

  return (
    <div className={css.container}>
      <ClosedSidebarTop/>
      <ClosedSidebarMiddle/>
      <ClosedSidebarBottom
        toggleMenu={toggleMenu}
        menuClosedButtonRef={menuClosedButtonRef}
      />
    </div>
  );
};

export default ClosedSidebar
