import { IOption } from '@interfaces';
import { Path, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type FormSelectProps<T extends FieldValues> = {
  data: IOption[];
  value: Path<T>,
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

const css = {
  select: `
    bg-white text-black select
    select-bordered w-full max-w-xs
  `,
  error: `
    text-red-500 mt-2
  `,
};

export const FormSelect = <T extends FieldValues>({
  data,
  value,
  register,
  errors
}: FormSelectProps<T>) => {
  return (
    <>
      <select
        className={css.select}
        {...register(value)}
      >
        {data?.map((item: IOption) => (
          <option
            key={item.value}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </select>
      {errors[value]?.message && (
        <div className={css.error}>
          {typeof errors[value]?.message === 'string' ? errors[value]?.message : 'Invalid input'}
        </div>
      )}
    </>
  );
};
