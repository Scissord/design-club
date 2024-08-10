import { FC, RefObject, useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import { useAppSelector, useNavigate } from '@hooks';
import { getUser } from '@store/reducers/authSlice';
import { IconExit, IconUser } from '@icons';

type ClosedUserOptionsProps = {
  isCloseMenu: boolean;
  toggleMenu: () => void;
  menuClosedButtonRef: RefObject<HTMLDivElement>;
  handleLogOut: () => void;
};

const variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const css = {
  container: `
    bottom-16 left-4 absolute min-w-40
    min-h-8 bg-white rounded-lg border
  `,
  label: `
    p-2 hover:bg-gray-200 hover:rounded-lg
    cursor-pointer flex items-center gap-2
    select-none text-[13px]
  `
};

const ClosedUserOptions: FC<ClosedUserOptionsProps> = (props) => {
  const {
    isCloseMenu,
    toggleMenu,
    menuClosedButtonRef,
    handleLogOut
  } = props;

  const navigate = useNavigate();

  const menuRef = useRef<HTMLDivElement>(null);

  const user = useAppSelector(getUser);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      menuClosedButtonRef.current && !menuClosedButtonRef.current.contains(event.target as Node)
    ) {
      toggleMenu();
    }
  };

  useEffect(() => {
    if (isCloseMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCloseMenu]);

  return (
    <>
      {isCloseMenu && <motion.div
          ref={menuRef}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.1 }}
          className={css.container}
        >
          <p
            onClick={() => {
              toggleMenu()
              navigate(`/users/${user?.id}`)
            }}
            className={css.label}
          >
            <IconUser fill="black"/>
            Аккаунт
          </p>
          <p
            onClick={() => handleLogOut()}
            className={css.label}
          >
            <IconExit fill="black"/>
            Выход
          </p>
        </motion.div>
      }
    </>
  )
}

export default ClosedUserOptions