import { FC } from 'react';
import { useNavigate } from "@hooks";
import { sidebar_urls } from '@constants';

const css = {
  middle: `
    flex flex-col gap-3 pt-8 h-full
  `,
  icon: `
    flex items-center justify-center
    hover:rounded-lg p-2 hover:bg-gray-100
    hover:bg-opacity-20 cursor-pointer
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