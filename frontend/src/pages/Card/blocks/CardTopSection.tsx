import { FC } from 'react'
import { useNavigate } from '@hooks';

type CardTopSectionProps = {
  id: string;
};

const css = {
  top_section: `
    h-[10vh] flex items-center justify-between
    gap-6 px-6 py-2
  `,
  title: `
    text-4xl font-bold text-black dark:text-white
  `,
  check: `
    cursor-pointer
  `,
};

const CardTopSection: FC<CardTopSectionProps> = ({ id }) => {
  const navigate = useNavigate();

  return (
    <section className={css.top_section}>
      <div className='flex items-center gap-3'>
        <div
          className='flex items-center justify-center h-8 w-8 p-2 border border-black dark:border-white cursor-pointer text-black dark:text-white rounded-lg select-none transition-transform duration-200 ease-in-out transform active:scale-95 hover:bg-gray-300 dark:hover:bg-gray-900'
          onClick={() => navigate(-1)}
        >
          {"<"}
        </div>
        <p className={css.title}>Входящие обращение №{id}</p>
      </div>
      <p className={css.check}>Сформировать счет на оплату</p>
    </section>
  )
}

export default CardTopSection