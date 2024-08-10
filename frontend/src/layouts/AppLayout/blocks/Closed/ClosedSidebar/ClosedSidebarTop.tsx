import { FC } from 'react';
import { useAppDispatch } from '@hooks';
import { toggleSidebar } from '@store/reducers/sidebarSlice';
import { IconArrowRightCircle } from '@icons';

const css = {
  icon: `
    flex items-center justify-center
    hover:rounded-lg p-2 hover:bg-gray-100
    hover:bg-opacity-20 cursor-pointer
  `
};

const ClosedSidebarTop: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(toggleSidebar())}
      className={css.icon}
    >
      <IconArrowRightCircle />
    </div>
  )
}

export default ClosedSidebarTop