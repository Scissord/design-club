import { FC } from "react";
import { Controller, Control } from "react-hook-form";
import { useAppSelector } from "@hooks";
import { selectTheme } from "@store/reducers/themeSlice";
import { useGetAllProductsQuery } from '@store/api/productApi';
import { IAddCardForm, IOption } from "@interfaces";
import { getReactSelectMultiStyles } from "@utils";
import ReactSelect from "react-select";
import Label from "./Label";

type ProductsProps = {
  control: Control<IAddCardForm>;
};

const Products: FC<ProductsProps> = ({ control }) => {
  const theme = useAppSelector(selectTheme);
  const { data = [] } = useGetAllProductsQuery({});

  return (
    <>
      <Label label={"Products"}/>
      <div className='col-span-2'>
        <Controller
          control={control}
          name="products"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <ReactSelect
                placeholder={"Products"}
                options={data}
                value={data?.filter((option: IOption) => value.includes(option.value))}
                isMulti={true}
                styles={getReactSelectMultiStyles(theme)}
                onChange={(selectedOptions) =>
                  onChange(selectedOptions.map((option: IOption) => option.value))
                }
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

export default Products
