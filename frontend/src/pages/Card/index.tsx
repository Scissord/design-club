import { FC } from 'react';
import { useParams } from '@hooks';
import { useGetCardQuery } from '@store/api/boardApi';
import CardTopSection from './blocks/CardTopSection';
import CardMiddleSection from './blocks/CardMiddleSection';
import CardBottomSection from './blocks/CardBottomSection';

const Card: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetCardQuery(id as string);

  return (
    <>
      <CardTopSection id={id as string}/>
      <CardMiddleSection progress={data?.progress}/>
      <CardBottomSection card={data ?? {}}/>
    </>
  );
};

export default Card