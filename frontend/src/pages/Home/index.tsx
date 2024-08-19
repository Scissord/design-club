import { FC, Fragment } from 'react';
import { useBoard } from '@hooks';
import { DragDropContext } from '@hello-pangea/dnd';
import Column from './blocks/Column';

const css = {
  top_section: `
    h-[14vh] flex items-center justify-between
  `,
  label: `
    text-center w-full text-4xl
    font-semibold text-red-500
  `,
  bottom_section: `
    h-[86vh] flex justify-between
    gap-3 px-2 z-50
  `
};

const Home: FC = () => {
  const {
    board,
    onDragEnd,
    handleDeleteCard,
    handleCreateCard,
    isCreateLoading,
    isCreateError,
  } = useBoard();

  return (
    <>
      <section className={css.top_section}>
        <p className={css.label}>Deals</p>
      </section>
      <DragDropContext onDragEnd={onDragEnd}>
        <section className={css.bottom_section}>
          {board?.order.map((columnId) => (
            <Fragment key={columnId}>
              <Column
                columnId={columnId}
                board={board}
                handleDeleteCard={handleDeleteCard}
                handleCreateCard={handleCreateCard}
                isCreateLoading={isCreateLoading}
                isCreateError={isCreateError}
              />
            </Fragment>
          ))}
        </section>
      </DragDropContext>
    </>
  );
};

export default Home;
