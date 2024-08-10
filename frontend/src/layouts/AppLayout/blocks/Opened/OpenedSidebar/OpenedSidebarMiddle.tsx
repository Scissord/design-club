import { FC } from 'react'
import { motion, Variants } from 'framer-motion';
import { sidebar_urls } from '@constants';
import { useNavigate } from '@hooks';

type OpenedSidebarMiddleProps = {
  variants: Variants;
};

const css = {
  middle: `
    flex flex-col gap-3 pt-8 h-full w-full px-2
  `,
  icon: `
    flex items-center gap-3
    hover:rounded-lg p-2 hover:bg-gray-100
    hover:bg-opacity-20 cursor-pointer
  `,
  label: `
    text-[13px] select-none text-white dark:text-black
  `,
};

const OpenedSidebarMiddle: FC<OpenedSidebarMiddleProps> = ({ variants }) => {
  const navigate = useNavigate();

  return (
    <div className={css.middle}>
      {sidebar_urls.map((url, index) => (
        <motion.div
          key={index}
          onClick={() => navigate(url.path)}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.1 }}
          className={css.icon}
        >
          {url.icon}
          <p className={css.label}>{url.label}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default OpenedSidebarMiddle