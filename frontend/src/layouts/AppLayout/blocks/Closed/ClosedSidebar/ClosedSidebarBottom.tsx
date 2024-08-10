import { FC, RefObject } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks';
import { toggleColorMode } from '@store/reducers/themeSlice';
import { ColorModeButton } from '@components';
import { getUser } from '@store/reducers/authSlice';

type ClosedSidebarBottomProps = {
  menuClosedButtonRef: RefObject<HTMLDivElement>;
  toggleMenu: () => void;
};

const css = {
  bottom: `
    mt-auto flex flex-col gap-3
  `,
  icon: `
    flex items-center justify-center
    hover:rounded-lg p-2 hover:bg-gray-100
    hover:bg-opacity-20 cursor-pointer
  `,
  avatar: `
    w-[1.4em] h-[1.4em] rounded-full
  `
};

const ClosedSidebarBottom: FC<ClosedSidebarBottomProps> = (props) => {
  const { menuClosedButtonRef, toggleMenu } = props;

  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  return (
    <div className={css.bottom}>
      <div
        onClick={() => dispatch(toggleColorMode())}
        className={css.icon}
      >
        <ColorModeButton />
      </div>
      <div
        ref={menuClosedButtonRef}
        onClick={() => toggleMenu()}
        className={css.icon}
      >
        <img
          src={user?.avatar}
          className={css.avatar}
        />
      </div>
    </div>
  )
}

export default ClosedSidebarBottom