import { FC, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { useAppSelector } from "@hooks";
import { selectTheme } from "@store/reducers/themeSlice";
import { IconArrowLeftSquare } from "@icons";
import { sidebar_urls } from "@constants";

type OpenedSidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const OpenSidebar: FC<OpenedSidebarProps> = (props) => {
  const { isSidebarOpen, setIsSidebarOpen } = props;

  const navigate = useNavigate();
  const theme = useAppSelector(selectTheme);

  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.1 }}
        className="w-full flex items-center justify-between pl-6 pr-4"
      >
        <div
          className={
            `flex flex-col font-bold text-md text-center
            ${theme === 'dark' ? 'text-black' : 'text-white'}
          `}
        >
          <p>Design</p>
          <p>Club</p>
        </div>

        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="hover:bg-gray-100 hover:bg-opacity-20 hover:rounded-lg cursor-pointer p-2"
        >
          <IconArrowLeftSquare onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>
      </motion.div>

      <div className="flex flex-col gap-3 pt-8">
        {sidebar_urls.map((url, index) => (
          <motion.div
            key={index}
            onClick={() => navigate(url.path)}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 hover:rounded-lg p-2 hover:bg-gray-100 hover:bg-opacity-20 cursor-pointer"
          >
            <div
              onClick={() => navigate(url.path)}
            >
              {url.icon}
            </div>
            <p className="text-[13px] text-white dark:text-black">{url.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OpenSidebar
