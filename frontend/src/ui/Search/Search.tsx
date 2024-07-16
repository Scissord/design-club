import { useState, useEffect } from 'react';
import { Icon } from '@ui';

export function Search(props) {

  const [value, setValue] = useState(props.value || '');
  const [typing, setTyping] = useState(false);

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
    let throttle = props.throttle ?? 100;
    if (throttle && !typing) props.onChange(value);
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
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && setValue(e.target.value)}
        className={`pl-[54px] outline-none h-full w-full 
          bg-transparent border-none text-body-color bg-no-repeat 
          bg-[length:16px] bg-[25px_48%] font-body-font 
          font-semibold text-[15px] placeholder-input-chat-color
        `}
      />

      {props.isSearchLoading && 
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
