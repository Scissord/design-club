import { FC } from 'react'
import { ICard } from '@interfaces';

type LeftBottomCardProps = {
  card: ICard;
};

const css = {
  left_card: `
    w-1/2 rounded-lg bg-white dark:bg-dbg
    shadow-lg flex flex-col gap-6 px-6 py-4
    text-black dark:text-white
  `,
  title: `
    flex items-center justify-between h-8
    border-b border-black dark:border-white
  `,
};

const LeftBottomCard: FC<LeftBottomCardProps> = (props) => {
  const { card } = props;

  return (
    <div className={css.left_card}>
      <div className={css.title}>
        <p>О сделке</p>
        <p>Изменить</p>
      </div>
      <div className='flex flex-col gap-4 overflow-y-auto'>
        <div className='flex flex-col gap-1'>
          <p className='text-sm'>Название</p>
          <p>{"Входящие обращение " + card?.id}</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-sm'>Сумма</p>
          <p>{card?.price} {"тенге"}</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-sm'>Ответственный</p>
          <div className='flex items-center gap-2'>
            <img className='w-6 h-6 rounded-full' alt="creator_avatar" src={card?.avatar}/>
            <p>{card?.creator_name}</p>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-sm'>Клиент</p>
          <p>{card?.client_name}</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-sm'>Источник</p>
          <p>{card?.source_name}</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-sm'>ID сделки</p>
          <p>{card?.id}</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-sm'>Счет на оплату</p>
          <p>{card?.client_name}</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-sm'>Доверенность</p>
          <p>{card?.source_name}</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-sm'>Закрывающие документы</p>
          <p>{card?.id}</p>
        </div>
      </div>
    </div>
  )
}

export default LeftBottomCard