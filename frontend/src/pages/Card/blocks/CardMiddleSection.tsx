import { FC } from 'react'

type CardMiddleSectionProps = {
  progress: number
};

const css = {
  middle_section: `
    h-[10vh] flex items-center justify-between
    gap-6 px-6 py-2
  `,
  left_middle: `
    h-full w-1/2 bg-white dark:bg-dbg flex
    items-center justify-center rounded-lg
  `,
  right_middle: `
    h-full w-1/2 bg-white dark:bg-dbg flex
    items-center justify-center rounded-lg
    text-black dark:text-white text-lg gap-6
    select-none
  `,
};

const sections = [
  { color: 'bg-gray-300' },
  { color: 'bg-gray-400' },
  { color: 'bg-gray-500' },
  { color: 'bg-gray-600' },
  { color: 'bg-gray-700' },
];

const CardMiddleSection: FC<CardMiddleSectionProps> = ({ progress }) => {
  return (
    <section className={css.middle_section}>
      <div className={css.left_middle}>
        <ul className="steps">
          {sections.map((_, index) => (
            <li
              key={index}
              className={`
                step
                ${index < progress ? 'step-primary' : ''}
              `}
            />
          ))}
        </ul>
      </div>
      <div className={css.right_middle}>
        <p className='cursor-pointer'>Печать</p>
        <p className='cursor-pointer'>Дизайн</p>
        <p className='cursor-pointer'>Перезаказ</p>
        <p className='cursor-pointer'>Бухгалтерия</p>
      </div>
    </section>
  );
};


export default CardMiddleSection