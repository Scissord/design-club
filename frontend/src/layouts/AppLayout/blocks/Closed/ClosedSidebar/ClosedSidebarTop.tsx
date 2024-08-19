import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks';
import { toggleSidebar } from '@store/reducers/sidebarSlice';
import { IconArrowRightCircle } from '@icons';
import { selectTheme } from '@store/reducers/themeSlice';

const css = {
  icon: `
    flex items-center justify-center
    hover:rounded-lg p-2 cursor-pointer
    hover:bg-gray-200 dark:hover:bg-gray-700
    transition-transform duration-200
    ease-in-out transform active:scale-95
  `
};

const ClosedSidebarTop: FC = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(toggleSidebar())}
      className={css.icon}
    >
      <IconArrowRightCircle fill={theme === 'light' ? 'black' : 'white'}/>
    </div>
  )
}

export default ClosedSidebarTop