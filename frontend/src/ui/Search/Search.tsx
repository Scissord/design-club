import { FC, useState, useEffect } from 'react';
import { Loader } from '@ui';
import { IconSearch } from '@icons';

interface ISearchProps {
  value: string;
  onChange: (value: string) => void;
  throttle?: number;
  placeholder?: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
};

const css = {
  container: `
    input input-bordered bg-white
    dark:bg-dbg text-black dark:text-white
    flex items-center gap-2
  `,
  input: `
    grow
  `,
};

export const Search: FC<ISearchProps> = (props) => {
  const [value, setValue] = useState(props.value || '');
  const [typing, setTyping] = useState(false);

  useEffect(() => {
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
    <label className={css.container}>
      <input
        type="text"
        className={css.input}
        value={value}
        placeholder={props.placeholder ?? 'Поиск...'}
        disabled={props.disabled}
        onChange={(e) => setValue(e.target.value)}
      />
      {props.loading ?
        <Loader size="loading-sm"/>
      : (
        <IconSearch/>
      )}
    </label>
  );
}
