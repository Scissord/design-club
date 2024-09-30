import { FC } from "react";
import { UseFormRegister, FieldErrors  } from "react-hook-form";
import { IAddProductForm } from "@interfaces";
import Label from "./Label";
import { FormTextInput } from "@ui";

type PriceProps = {
  register: UseFormRegister<IAddProductForm>;
  errors: FieldErrors<IAddProductForm>;
};

const Name: FC<PriceProps> = ({ register, errors }) => {
  return (
    <>
      <Label label={"Name"}/>
      <div className='col-span-2'>
        <FormTextInput
          value={"name"}
          register={register}
          errors={errors}
        />
      </div>
    </>
  );
};

export default Name;
