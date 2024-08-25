import { FC, useContext } from 'react';
import { ViewContext } from '@context';
import { ICard, IError } from '@interfaces';
import { useUpdateCardItemMutation } from '@store/api/boardApi';
import LeftBottomCard from './CardBottomSection/LeftBottomCard';
import RightBottomCard from './CardBottomSection/RightBottomCard';

type CardBottomSectionProps = {
  card: ICard;
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

const CardBottomSection: FC<CardBottomSectionProps> = ({ card }) => {
  const context = useContext(ViewContext);

  const [updateProduct] = useUpdateCardItemMutation();

  const handleUpdateProduct = async (card_item_id: number, progress: number) => {
    try {
      await updateProduct({ id: card_item_id, body: { progress } });
    } catch (error) {
      const typedError = error as IError;
      context?.notification.show(typedError?.data?.error || typedError.message || 'An error occurred', 'error');
    }
  };

  return (
    <section className={css.bottom_section}>
      <LeftBottomCard
        card={card}
      />
      <RightBottomCard
        card={card}
        handleUpdateProduct={handleUpdateProduct}
      />
    </section>
  )
}

export default CardBottomSection