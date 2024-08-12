import { FC } from "react";
import { UseFormRegister, FieldValues, FieldErrors  } from "react-hook-form";
import { IAddCardForm } from "@interfaces";
import Label from "./Label";

type PriceProps = {
  register: UseFormRegister<IAddCardForm>;
  errors: FieldErrors<FieldValues>;
};

const Price: FC<PriceProps> = ({ register, errors }) => {
  return (
    <>
      <Label label={"Price"}/>
      <div className='col-span-2'>
        <label className="bg-white text-black input input-bordered flex items-center gap-2 w-full">
          <input
            type="number"
            className="grow w-full"
            {...register("price")}
          />
        </label>
      </div>
      {/* {errors.price?.message && (
        <div className="text-red-500">
          {typeof errors.price.message === 'string' ? errors.price.message : 'Invalid input'}
        </div>
      )} */}
    </>
  );
};

export default Price;