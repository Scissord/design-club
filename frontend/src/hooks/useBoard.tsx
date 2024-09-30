import axios from '@axios';
import { IAddCardForm, IBoard, IColumn, IError } from '@interfaces';
import { useContext, useEffect, useState } from 'react';
import { ViewContext } from '@context';
import { DropResult } from '@hello-pangea/dnd';
import { useSelector } from 'react-redux';
import { getAccessToken } from '@store/reducers/authSlice';

export const useBoard = () => {
  const context = useContext(ViewContext);
  const accessToken = useSelector(getAccessToken);

  const [board, setBoard] = useState<IBoard>({
    columns: {},
    cards: {},
    order: [],
  });
  const [isCreateLoading, setIsCreateLoading] = useState<boolean>(false);
  const [isCreateError, setIsCreateError] = useState<boolean>(false);

  useEffect(() => {
    getBoard();
  }, [])

  const getBoard = async () => {
    await axios({
      method: 'GET',
      url: `http://localhost:8080/api/board`,
    }).then((res) => setBoard(res.data));
  };

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;



    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    };

    if (type === "column") {
      const newColumnOrder = Array.from(board.order);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setBoard({ ...board, order: newColumnOrder });
      return;
    };

    const startColumn = (board.columns as { [key: string]: IColumn })[source.droppableId];
    const finishColumn = (board.columns as { [key: string]: IColumn })[destination.droppableId];


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

      await axios({
        method: 'PATCH',
        url: `http://localhost:8080/api/cards/${draggableId}/move`,
        data: {
          cardId: draggableId,
          sourceColumnId: startColumn.id,
          destinationColumnId: startColumn.id,
          sourceIndex: source.index,
          destinationIndex: destination.index,
        },
        withCredentials: true,
      })

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

    await axios({
      method: 'PATCH',
      url: `http://localhost:8080/api/cards/${draggableId}/move`,
      data: {
        cardId: draggableId,
        sourceColumnId: startColumn.id,
        destinationColumnId: finishColumn.id,
        sourceIndex: source.index,
        destinationIndex: destination.index,
      },
      withCredentials: true,
    })
  };

  const handleCreateCard = async (columnId: string, data: IAddCardForm) => {
    setIsCreateLoading(true);
    setIsCreateError(false);
    try {
      await axios({
        method: 'POST',
        url: `http://localhost:8080/api/cards/${columnId}`,
        data,
      }).then(() => {
        setIsCreateLoading(false);
        context?.modal.hide();
      })
    } catch (error) {
      setIsCreateError(true);
      const typedError = error as IError;
      context?.notification.show(typedError?.data?.error || 'An error occurred', 'error');
    }
  };

  const handleDeleteCard = async (id: string, columnId: string) => {
    const confirm = window.confirm('Are you sure?');
    if(confirm) {
      try {
        await axios({
          method: 'DELETE',
          url: `http://localhost:8080/api/cards/${id}`,
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          data: {
            column_id: columnId
          },
          withCredentials: true,
        })
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
    isCreateLoading,
    isCreateError
  };
};
