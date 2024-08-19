import { FC } from "react";
import { Controller, Control } from "react-hook-form";
import { useAppSelector } from "@hooks";
import { selectTheme } from "@store/reducers/themeSlice";
import { useGetAllClientsQuery } from '@store/api/clientApi';
import { IAddCardForm, IOption } from "@interfaces";
import { getReactSelectStyles } from '@utils';
import ReactSelect from "react-select";
import Label from "./Label";

type ClientProps = {
  control: Control<IAddCardForm>;
};

const Client: FC<ClientProps> = ({ control }) => {
  const { data = [] } = useGetAllClientsQuery({});
  const theme = useAppSelector(selectTheme)

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
                styles={getReactSelectStyles(theme)}
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
