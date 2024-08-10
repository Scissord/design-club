import {
  useGetColumnsQuery,
  useMoveCardMutation
} from '@store/api/columnsApi';
import { IBoard, IColumn, ICard } from '@interfaces';
import { useCallback, useEffect, useState } from 'react';

export const useBoard = () => {
  const [board, setBoard] = useState({
    columns: {},
    cards: {},
    order: [],
  });

  const { data = {}, isSuccess } = useGetColumnsQuery({});
  const [moveCard] = useMoveCardMutation();

  useEffect(() => {
    if(data && isSuccess) {
      setBoard(data)
    }
  }, [isSuccess, data]);

  const onDragEnd = async (result) => {
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

  return {
    board,
    onDragEnd
  };
};
