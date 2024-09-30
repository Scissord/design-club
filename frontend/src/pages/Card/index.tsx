import { FC } from 'react';
import { Loader } from '@ui';
import { useParams, useCard } from '@hooks';
import CardTopSection from './blocks/CardTopSection';
import CardMiddleSection from './blocks/CardMiddleSection';
import CardBottomSection from './blocks/CardBottomSection';

const Card: FC = () => {
  const { id } = useParams<{ id: string }>();
  if(!id) return <div><Loader/></div>

  const { data, handleUpdateCardItem } = useCard(id);

  return (
    <>
      <CardTopSection id={id as string}/>
      <CardMiddleSection progress={data.progress}/>
      <CardBottomSection card={data} handleUpdateCardItem={handleUpdateCardItem}/>
    </>
  );
};

export default Card