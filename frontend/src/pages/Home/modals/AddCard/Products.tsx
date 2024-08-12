import { FC } from "react";
import { Controller, Control  } from "react-hook-form";
import { useGetAllProductsQuery } from '@store/api/productsApi';
import ReactSelect from "react-select";
import Label from "./Label";
import { IAddCardForm, IOption } from "@interfaces";

type ProductsProps = {
  control: Control<IAddCardForm>;
};

const Products: FC<ProductsProps> = ({ control }) => {
  const { data = [] } = useGetAllProductsQuery({});

  return (
    <>
      <Label label={"Products"}/>
      <div className='col-span-2 relative'>
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
                onChange={(selectedOptions) =>
                  onChange(selectedOptions.map((option) => option.value))
                }
              />
              {error && (
                <div className="text-red-500">
                  {typeof error.message === 'string' ? error.message : 'Invalid input'}
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