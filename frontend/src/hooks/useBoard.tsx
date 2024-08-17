import {
  useGetColumnsQuery,
  useCreateCardMutation,
  useDeleteCardMutation,
  useMoveCardMutation
} from '@store/api/boardApi';
import { IAddCardForm, IBoard, IError } from '@interfaces';
import { useContext, useEffect, useState } from 'react';
import { ViewContext } from '@context';
import { DropResult } from '@hello-pangea/dnd';

export const useBoard = () => {
  const context = useContext(ViewContext);

  const { data = {}, isSuccess } = useGetColumnsQuery({});
  const [moveCard] = useMoveCardMutation();
  const [deleteCard] = useDeleteCardMutation();
  const [createCard, { isError, isLoading }] = useCreateCardMutation();

  const [board, setBoard] = useState<IBoard>({
    columns: {},
    cards: {},
    order: [],
  });

  useEffect(() => {
    if(data && isSuccess) {
      setBoard(data)
    }
  }, [isSuccess, data]);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = board.columns[source.droppableId];
    const finishColumn = board.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const newCardIds = Array.from(startColumn.cardsIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        cardsIds: newCardIds,
      };

      setBoard({
        ...board,
        columns: {
          ...board.columns,
          [newColumn.id]: newColumn,
        },
      });

      // Отправка обновленных данных на сервер
      await moveCard({
        cardId: draggableId,
        sourceColumnId: startColumn.id,
        destinationColumnId: startColumn.id,
        sourceIndex: source.index,
        destinationIndex: destination.index,
      }).unwrap();

      return;
    }

    const startCardIds = Array.from(startColumn.cardsIds);
    startCardIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      cardsIds: startCardIds,
    };

    const finishCardIds = Array.from(finishColumn.cardsIds);
    finishCardIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = {
      ...finishColumn,
      cardsIds: finishCardIds,
    };

    setBoard({
      ...board,
      columns: {
        ...board.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    });

    // Отправка обновленных данных на сервер
    await moveCard({
      cardId: draggableId,
      sourceColumnId: startColumn.id,
      destinationColumnId: finishColumn.id,
      sourceIndex: source.index,
      destinationIndex: destination.index,
    }).unwrap();
  };

  const handleCreateCard = async (columnId: string, data: IAddCardForm) => {
    try {
      await createCard({ columnId, body: data  }).unwrap();
      context?.modal.hide();
    } catch (error) {
      const typedError = error as IError;
      context?.notification.show(typedError?.data?.error || 'An error occurred', 'error');
    }
  };

  const handleDeleteCard = async (id: string, columnId: string) => {
    const confirm = window.confirm('Are you sure?');
    if(confirm) {
      try {
        await deleteCard({ cardId: id, columnId }).unwrap();
      } catch (error) {
        const typedError = error as IError;
        context?.notification.show(typedError?.data?.error || 'An error occurred', 'error');
      }
    };
  };

  return {
    board,
    onDragEnd,
    handleDeleteCard,
    handleCreateCard,
    isCreateLoading: isLoading,
    isCreateError: isError,
  };
};
