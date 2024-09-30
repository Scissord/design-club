import { FC, Fragment } from 'react'
import { ICard } from '@interfaces';

type RightBottomCardProps = {
  card: ICard;
  handleUpdateCardItem: (card_item_id: number, progress: number) => void;
};

const css = {
  right_card: `
    w-1/2 rounded-lg bg-white dark:bg-dbg
    shadow-lg px-6 py-4 text-black dark:text-white
  `,
};

const sections = [1, 2, 3, 4];

const RightBottomCard: FC<RightBottomCardProps> = (props) => {
  const { card, handleUpdateCardItem } = props;

  return (
    <div className={css.right_card}>
      <div className='grid grid-cols-4 gap-3 overflow-y-auto'>
        {card?.items?.map((item) => (
          <Fragment key={item?.id}>
            <div className='flex items-center gap-3 col-span-2'>
              <p className=''>{item?.id}</p>
              <p className=''>{item?.name}</p>
            </div>
            <ul className="steps flex items-center col-span-2">
              {sections.map((_, index) => (
                <li
                  key={_}
                  onClick={() => handleUpdateCardItem(item?.card_item_id, _)}
                  className={`
                    step cursor-pointer
                    ${index < item?.progress ? 'step-primary' : ''}
                  `}
                />
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default RightBottomCard