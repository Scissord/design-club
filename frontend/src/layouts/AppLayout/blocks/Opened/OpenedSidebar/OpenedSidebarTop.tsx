import { FC } from 'react'
import { toggleSidebar } from "@store/reducers/sidebarSlice";
import { motion, Variants } from 'framer-motion';
import { useAppDispatch } from '@hooks';
import { IconArrowLeftCircle } from '@icons';

type OpenedSidebarTopProps = {
  variants: Variants;
};

const css = {
  motion: `
    w-full flex items-center justify-between px-4
  `,
  title: `
    flex flex-col font-bold text-md
    text-center text-white dark:text-black
  `,
  icon: `
    flex items-center justify-center
    hover:rounded-lg p-2 hover:bg-gray-100
    hover:bg-opacity-20 cursor-pointer
  `,
};

const OpenedSidebarTop: FC<OpenedSidebarTopProps> = ({ variants }) => {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ delay: 0.1 }}
      className={css.motion}
    >
      <p
        className={css.title}
      >
        <span>Design</span>
        <span>Club</span>
      </p>

      <div
        onClick={() => dispatch(toggleSidebar())}
        className={css.icon}
      >
        <IconArrowLeftCircle />
      </div>
    </motion.div>
  )
}

export default OpenedSidebarTop