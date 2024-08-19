import { FC } from 'react';
import { useNavigate } from "@hooks";
import { sidebar_urls } from '@constants';

const css = {
  middle: `
    flex flex-col gap-3 pt-8 h-full
  `,
  icon: `
    flex items-center justify-center
    hover:rounded-lg p-2 cursor-pointer
    hover:bg-gray-200 dark:hover:bg-gray-700
    transition-transform duration-200
    ease-in-out transform active:scale-95
  `
};

const ClosedSidebarMiddle: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={css.middle}>
      {sidebar_urls.map((url) => (
        <div
          key={url.path}
          onClick={() => navigate(url.path)}
          className={css.icon}
        >
          {url.icon}
        </div>
      ))}
    </div>
  )
}

export default ClosedSidebarMiddle