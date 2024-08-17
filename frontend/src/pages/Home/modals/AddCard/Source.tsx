import { FC } from "react";
import { UseFormRegister, FieldValues, FieldErrors  } from "react-hook-form";
import { IAddCardForm } from "@interfaces";
import { useGetAllSourcesQuery } from "@store/api/sourceApi";
import { FormSelect } from "@ui";
import Label from "./Label";

type SourceProps = {
  register: UseFormRegister<IAddCardForm>;
  errors: FieldErrors<IAddCardForm>;
};

const Source: FC<SourceProps> = ({ register, errors }) => {
  const { data = [] } = useGetAllSourcesQuery({});

  return (
    <>
      <Label label={"Source"}/>
      <div className='col-span-2'>
        <FormSelect
          data={data}
          value={"source_id"}
          register={register}
          errors={errors}
        />
      </div>
    </>
  )
}

export default Source