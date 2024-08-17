import { FC } from 'react';
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';

export const IconSource: FC = () => {
  const theme = useAppSelector(selectTheme);

  return (
    <svg
      fill={theme === 'dark' ? 'white' : 'black'}
      // viewBox="0 0 32 32"
      viewBox="0 0 448 512"
      height="1.4em"
      width="1.4em"
      cursor="pointer"
    >
      {/* <path
        fill="currentColor"
        d="M16 5.559c-6.118 0-11.078 4.96-11.078 11.079 0 4.749 2.989 8.799 7.188 10.374l2.553-6.808a3.808 3.808 0 112.674 0l2.553 6.808c4.199-1.575 7.188-5.625 7.188-10.374 0-6.119-4.96-11.079-11.079-11.079z"
      /> */}
      <path d="M427.2 203c0-112.1-90.9-203-203-203C112.1-.2 21.2 90.6 21 202.6A202.86 202.86 0 00161.5 396v101.7a14.3 14.3 0 0014.3 14.3h96.4a14.3 14.3 0 0014.3-14.3V396.1A203.18 203.18 0 00427.2 203zm-271.6 0c0-90.8 137.3-90.8 137.3 0-.1 89.9-137.3 91-137.3 0z" />
    </svg>
  );
}
