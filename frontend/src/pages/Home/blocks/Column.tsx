import { FC, Fragment } from 'react'
import { IBoard, ICard } from '@interfaces';
import { Droppable } from '@hello-pangea/dnd';
import Card from './Card';

type ColumnProps = {
  columnId: string;
  board: IBoard;
  handleOpenAddDealModal: (id: string) => void;
}

const Column: FC<ColumnProps> = (props) => {
  const {
    columnId, board,
    handleOpenAddDealModal,
  } = props;

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
          className='p-2 w-1/5 bg-column dark:bg-dcolumn rounded-xl'
        >
          <p className='text-lg text-center text-black dark:text-white'>{column.title}</p>
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
            onClick={() => handleOpenAddDealModal(column.id)}
            className={`
              text-center select-none bg-white dark:bg-indigo-950
              p-2 m-2 text-black dark:text-white shadow-md rounded-lg
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