import { FC, Fragment } from 'react';
import { useBoard } from '@hooks';
import { DragDropContext } from '@hello-pangea/dnd';
import Column from './blocks/Column';

const Home: FC = () => {
  const {
    board,
    onDragEnd,
    handleOpenAddDealModal
  } = useBoard();

  return (
    <>
      <section className='h-[14vh] flex items-center justify-between'>
        <p className='text-center w-full text-4xl font-semibold text-red-500'>Deals</p>
      </section>
      <DragDropContext onDragEnd={onDragEnd}>
        <section className='h-[86vh] flex justify-between gap-3 px-2'>
          {board?.order.map((columnId) => (
            <Fragment key={columnId}>
              <Column
                columnId={columnId}
                board={board}
                handleOpenAddDealModal={handleOpenAddDealModal}
              />
            </Fragment>
          ))}
        </section>
      </DragDropContext>
    </>
  );
};

export default Home;
