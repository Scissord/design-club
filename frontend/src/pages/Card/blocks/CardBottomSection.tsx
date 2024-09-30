import { FC, useContext } from 'react';
import { ViewContext } from '@context';
import { ICard } from '@interfaces';
import LeftBottomCard from './CardBottomSection/LeftBottomCard';
import RightBottomCard from './CardBottomSection/RightBottomCard';

type CardBottomSectionProps = {
  card: ICard;
  handleUpdateCardItem: (card_item_id: number, progress: number) => void;
};

const css = {
  bottom_section: `
    h-[80vh] flex justify-between
    gap-6 px-6 py-2
  `,
  left_card: `
    w-1/2 rounded-lg bg-white dark:bg-dbg
    shadow-lg flex flex-col gap-6 px-6 py-4
    text-black dark:text-white
  `,
  right_card: `
    w-1/2 rounded-lg bg-white dark:bg-dbg
    shadow-lg px-6 py-4 text-black dark:text-white
  `,
};

const CardBottomSection: FC<CardBottomSectionProps> = ({ card, handleUpdateCardItem }) => {
  return (
    <section className={css.bottom_section}>
      <LeftBottomCard
        card={card}
      />
      <RightBottomCard
        card={card}
        handleUpdateCardItem={handleUpdateCardItem}
      />
    </section>
  )
}

export default CardBottomSection