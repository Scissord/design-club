import { FC } from 'react'
import { ICard } from '@interfaces';
import { Draggable } from '@hello-pangea/dnd';

type CardProps = {
  card: ICard,
  index: number;
}

const Card: FC<CardProps> = (props) => {
  const {
    card,
    index
  } = props;

  return (
    <Draggable
      draggableId={card?.id}
      index={index}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={provided.draggableProps.style}
          className='select-none p-2 m-2 bg-card color-black border shadow-md rounded-lg'
        >
          {index + 1}.
          {card?.content}
        </div>
      )}
    </Draggable>
  )
}

export default Card