import { FC } from 'react';
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';

export const IconArticle: FC = () => {
  const theme = useAppSelector(selectTheme);

  return (
    <svg
      fill={theme === 'dark' ? 'white' : 'black'}
      viewBox="0 0 24 24"
      height="1.4em"
      width="1.4em"
      cursor="pointer"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z" />
    </svg>
  );
}
