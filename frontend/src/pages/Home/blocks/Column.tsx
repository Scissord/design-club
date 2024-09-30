import { FC, Fragment, useContext } from 'react'
import { IAddCardForm, IBoard, ICard, IColumn } from '@interfaces';
import { ViewContext } from '@context';
import { Droppable } from '@hello-pangea/dnd';
import AddCardModal from '../modals/AddCard';
import Card from './Card';
import './scroll.css';

type ColumnProps = {
  columnId: string;
  board: IBoard;
  handleDeleteCard: (id: string, column_id: string) => void;
  handleCreateCard: (columnId: string, data: IAddCardForm) => void;
  isCreateLoading: boolean;
  isCreateError: boolean;
};

const css = {
  container: `
    column p-2 w-1/5 bg-column
    dark:bg-dcolumn rounded-xl
  `,
  title: `
    text-lg text-center
    text-black dark:text-white
  `,
  add: `
    text-center select-none bg-white dark:bg-indigo-950
    p-2 m-2 text-black dark:text-white shadow-md rounded-lg
    cursor-pointer
  `
};

const Column: FC<ColumnProps> = (props) => {
  const {
    columnId, board,
    handleDeleteCard,
    handleCreateCard,
    isCreateLoading,
    isCreateError,
  } = props;

  const context = useContext(ViewContext);

  const column = (board.columns as { [key: string]: IColumn })[columnId];
  const cards = column.cardsIds
    .map((cardId: string) => (board.cards as { [key: string]: ICard })[cardId])
    .filter((card: ICard) => card);

  const handleOpenAddDealModal = (columnId: string) => {
    context?.modal.show({
      title: 'Add Card',
      children: <AddCardModal
        columnId={columnId}
        handleCreateCard={handleCreateCard}
        isLoading={isCreateLoading}
        isError={isCreateError}
      />
    })
  };

  return (
    <Droppable droppableId={column.id} key={column.id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={css.container}
        >
          <p className={css.title}>{column.title}</p>
          {cards && cards.length > 0 && cards.map((card, index) => (
            <Fragment key={card?.id}>
              <Card
                card={card}
                index={index}
                handleDeleteCard={handleDeleteCard}
              />
            </Fragment>
          ))}
          {provided.placeholder}
          <p
            onClick={() => handleOpenAddDealModal(column.id)}
            className={css.add}
          >
            + Добавить
          </p>
        </div>
      )}
    </Droppable>
  )
}

export default Column