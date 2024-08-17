import { FC } from "react";
import { Controller, Control } from "react-hook-form";
import { useGetAllProductsQuery } from '@store/api/productsApi';
import { IAddCardForm, IOption } from "@interfaces";
import ReactSelect from "react-select";
import Label from "./Label";

type ProductsProps = {
  control: Control<IAddCardForm>;
};

const Products: FC<ProductsProps> = ({ control }) => {
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
                className="text-black"
                onChange={(selectedOptions) =>
                  onChange(selectedOptions.map((option) => option.value))
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
