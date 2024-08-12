import { FC } from 'react'
import { useAppSelector } from '@hooks';
import { selectTheme } from '@store/reducers/themeSlice';

type LabelProps = {
  label: string;
};

const Label: FC<LabelProps> = ({ label }) => {
  const theme = useAppSelector(selectTheme);

  return (
    <div className='col-span-1'>
      <p
        className={`
          font-bold text-[18px]
          ${theme === 'dark' ? 'text-white' : 'text-black'}
        `}
      >
        {label}
      </p>
    </div>
  )
}

export default Label