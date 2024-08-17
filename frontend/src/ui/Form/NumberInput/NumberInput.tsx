import { Path, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type FormNumberInputProps<T extends FieldValues> = {
  value: Path<T>,
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

const css = {
  label: `
    input input-bordered flex
    items-center gap-2 w-full
    bg-white dark:bg-dbg
    text-black dark:text-white
  `,
  input: `
    grow w-full
  `,
  error: `
    text-red-500 mt-2
  `,
};

export const FormNumberInput = <T extends FieldValues>({
  value,
  register,
  errors
}: FormNumberInputProps<T>) => {
  return (
    <>
      <label className={css.label}>
        <input
          type="number"
          className={css.input}
          {...register(value)}
        />
      </label>
      {errors[value]?.message && (
        <div className={css.error}>
          {typeof errors[value]?.message === 'string' ? errors[value]?.message : 'Invalid input'}
        </div>
      )}
    </>
  );
};
