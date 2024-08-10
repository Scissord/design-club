import { FC, ReactNode, useContext, useEffect } from 'react'
import { ViewContext } from '@context';
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';

type ModalProps = {
  id: string;
  title: string;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ id, title, children }) => {
  const context = useContext(ViewContext);
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    const modal = document.getElementById(id) as HTMLDialogElement | null;
    if(modal) {
      modal.showModal()
    }
  }, [id])

  return (
    <dialog id={id} className="modal">
      <div className={`modal-box ${theme === 'dark' ? 'bg-indigo-950' : 'bg-white'}`}>
        <form method="dialog">
          <button
            onClick={() => context?.modal.hide()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            tabIndex={-1}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
      </div>
    </dialog>
  )
}
