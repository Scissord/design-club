import { FC } from "react";
import { UseFormRegister, FieldErrors  } from "react-hook-form";
import { IAddProductForm } from "@interfaces";
import Label from "./Label";
import { FormNumberInput } from "@ui";

type PriceProps = {
  register: UseFormRegister<IAddProductForm>;
  errors: FieldErrors<IAddProductForm>;
};

const Price: FC<PriceProps> = ({ register, errors }) => {
  return (
    <>
      <Label label={"Price"}/>
      <div className='col-span-2'>
        <FormNumberInput
          value={"price"}
          register={register}
          errors={errors}
        />
      </div>
    </>
  );
};

export default Price;
