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
    h-full w-1/2 px-2 py-1
  `,
  right_middle: `
    h-full w-1/2 bg-white dark:bg-dbg
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
        <p>Стадия сделки</p>
        <div className="flex items-center border border-black dark:border-white rounded-lg h-6">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`
                w-1/5 h-full
                ${index < progress ? _.color : ''}
                ${index === 0 ? 'rounded-tl-md rounded-bl-md' : ''}
                ${index === 4 ? 'rounded-tr-md rounded-br-md' : ''}
                ${index < sections.length - 1 ? 'border-r border-black dark:border-white' : ''}
              `}
            />
          ))}
        </div>
      </div>
      <div className={css.right_middle}>
        right_top
      </div>
    </section>
  );
};


export default CardMiddleSection