import { FC } from "react";
import { Controller, Control } from "react-hook-form";
import { useGetAllClientsQuery } from '@store/api/clientApi';
import { IAddCardForm, IOption } from "@interfaces";
import ReactSelect from "react-select";
import Label from "./Label";

type ClientProps = {
  control: Control<IAddCardForm>;
};

const Client: FC<ClientProps> = ({ control }) => {
  const { data = [] } = useGetAllClientsQuery({});

  return (
    <>
      <Label label={"Client"}/>
      <div className='col-span-2'>
        <Controller
          control={control}
          name="client_id"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <ReactSelect
                placeholder={"Client"}
                options={data}
                value={data.find((option: IOption) => option.value === value) || null}
                className="text-black"
                onChange={(selectedOption) => {
                  if (selectedOption) {
                    onChange((selectedOption as IOption).value);
                  };
                }}
              />
              {error && (
                <div className="text-red-500 mt-2">
                  {error.message}
                </div>
              )}
            </>
          )}
        />
      </div>
    </>
  )
}

export default Client
