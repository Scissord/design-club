import { FC, useContext, useState } from 'react'
import { ICard } from '@interfaces';
import { Draggable } from '@hello-pangea/dnd';
import { DateFormat } from '@utils';
import { ViewContext } from '@context';

type CardProps = {
  card: ICard,
  index: number;
  handleDeleteCard: (id: string, column_id: string) => void;
};

const css = {
  container: `
    select-none p-2 m-2 bg-card dark:bg-dcard
    shadow-md rounded-lg text-[13px] text-black
    dark:text-white relative z-10
  `,
  delete: `
    absolute top-1 right-2 hover:cursor-pointer
  `,
};

const Card: FC<CardProps> = (props) => {
  const {
    card,
    index,
    handleDeleteCard
  } = props;

  const context = useContext(ViewContext);

  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  const handleOpenCard = (id: string) => {
    context?.modal.show({
      title: `Card ${id}`,
      children: <div>{id}</div>
    })
  }

  return (
    <Draggable
      index={index}
      draggableId={card?.id}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            ...provided.draggableProps.style,
            zIndex: 10
          }}
          onClick={() => handleOpenCard(card?.id)}
          onMouseEnter={() => setIsDeleteVisible(true)}
          onMouseLeave={() => setIsDeleteVisible(false)}
          className={css.container}
        >
          <p>{"Входящие обращения №" + (index + 1)}</p>
          <p>{card?.price}</p>
          <p>{card?.client_name}</p>
          <p>{DateFormat(card?.created_at, 'H:i d.m.Y')}</p>
          {isDeleteVisible && (
            <div
              onClick= {(e) => {
                e.stopPropagation();
                handleDeleteCard(card?.id, card?.column_id)}
              }
              className={css.delete}
            >
              ✕
            </div>
          )}
        </div>
      )}
    </Draggable>
  )
}

export default Card