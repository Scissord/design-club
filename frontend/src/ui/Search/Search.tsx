import { useState, useEffect } from 'react';
import { Icon } from '@ui';

interface ISearch {
  value: string;
  onChange: (value: string) => void;
  throttle?: number;
  placeholder?: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

export function Search(props: ISearch) {

  const [value, setValue] = useState(props.value || '');
  const [typing, setTyping] = useState(false);
  // const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // throttle typing
    let throttle = props.throttle ?? 1000;
    if (throttle && !typing) {
      const onKeyPress = () => {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
        }, throttle);
      };

      window.addEventListener('keydown', onKeyPress);
      return () => window.removeEventListener('keydown', onKeyPress);
    }
  }, [props.throttle, typing]);

  useEffect(() => {
    //  if (isMounted) {
      let throttle = props.throttle ?? 100;
      if (throttle && !typing) props.onChange(value);
    // } else {
    //   setIsMounted(true);
    // }
  }, [typing, value]);

  return (
    <div className="relative h-[12vh] z-30 search-bar w-full flex items-center">
      <div className='absolute left-5'>
        <Icon size={18} icon="search" color="#f0f0f0"/>
      </div>
      <input
        type="text"
        value={value}
        placeholder={props.placeholder ?? 'Поиск...'}
        disabled={props.disabled}
        onChange={(e) => setValue(e.target.value)}
        className={`pl-[54px] outline-none h-full w-full
          bg-transparent border-none text-body-color bg-no-repeat
          bg-[length:16px] bg-[25px_48%] font-body-font
          font-semibold text-[15px] placeholder-input-chat-color
        `}
      />

      {props.loading &&
        <div className='absolute right-5'>
          <Icon
            icon={'loader'}
            size={18}
            className={'animate-spin'}
            color="gray"
          />
        </div>
      }
    </div>
  );
}
