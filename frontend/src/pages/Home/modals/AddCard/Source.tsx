import { FC } from "react";
import { UseFormRegister, FieldValues, FieldErrors  } from "react-hook-form";
import { IAddCardForm } from "@interfaces";
import Label from "./Label";

type SourceProps = {
  register: UseFormRegister<IAddCardForm>;
  errors: FieldErrors<FieldValues>;
};

const sources = [
  { id: 1, label: 'Холодный звонок' },
  { id: 2, label: 'Ещё' },
];

const Source: FC<SourceProps> = ({ register, errors }) => {
  return (
    <>
      <Label label={"Source"}/>
      <div className='col-span-2'>
        <select
          className="bg-white text-black select select-bordered w-full max-w-xs"
          {...register("source_id")}
        >
          {sources.map((source) => (
            <option key={source.id} value={source.id}>{source.label}</option>
          ))}
        </select>
      </div>
      {/* {errors.source?.message && (
        <div className="text-red-500">
          {typeof errors.source.message === 'string' ? errors.source.message : 'Invalid input'}
        </div>
      )} */}
    </>
  )
}

export default Source