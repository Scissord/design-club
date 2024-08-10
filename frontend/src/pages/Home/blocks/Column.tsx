import { FC, Fragment } from 'react'
import { IBoard, ICard } from '@interfaces';
import { Droppable } from '@hello-pangea/dnd';
import Card from './Card';

type ColumnProps = {
  columnId: string;
  board: IBoard;
}

const Column: FC<ColumnProps> = ({columnId, board }) => {
  const column = board.columns[columnId];
  const cards = column.cardsIds
    .map((cardId: string) => board.cards[cardId])
    .filter((card: ICard)  => card);

  return (
    <Droppable droppableId={column.id} key={column.id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className='p-2 border w-1/5 bg-column rounded-xl'
        >
          <p className='text-lg text-center'>{column.title}</p>
          {cards && cards.length > 0 && cards.map((card, index) => (
            <Fragment key={card?.id}>
              <Card
                card={card}
                index={index}
              />
            </Fragment>
          ))}
          {provided.placeholder}
          <p
            className={`
              text-center select-none bg-indigo-950
              p-2 m-2 text-white border shadow-md rounded-lg
              cursor-pointer
            `}
          >
            + Добавить
          </p>
        </div>
      )}
    </Droppable>
  )
}

export default Column