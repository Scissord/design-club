import { FC } from 'react';
import { IAddCardForm } from '@interfaces';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDealSchema } from '@validation';

import Price from './AddCard/Price';
import Source from './AddCard/Source';
import Client from './AddCard/Client';
import Products from './AddCard/Products';

type AddDealProps = {
  columnId: string;
  handleCreateCard: (columnId: string, data: IAddCardForm) => void;
  isLoading: boolean;
  isError: boolean;
};

const AddCardModal: FC<AddDealProps> = (props) => {
  const { columnId, handleCreateCard, isLoading, isError } = props;

  const {
    control,
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IAddCardForm>({
    mode: "onBlur",
    resolver: yupResolver(addDealSchema),
    defaultValues: {
      price: 0,
      source_id: "1",
      client_id: undefined,
      products: [],
    },
  });

  const onSubmit: SubmitHandler<IAddCardForm> = async (data) => {
    handleCreateCard(columnId, data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-3 gap-3 w-full py-6"
    >
      <Price
        register={register}
        errors={errors}
      />
      <Source
        register={register}
        errors={errors}
      />
      <Client
        control={control}
      />
      <Products
        control={control}
      />
      <div className='col-span-3'>
        {isError && <div className="text-red-500">Request failed. Please try again.</div>}
      </div>
      <div className='col-span-3 flex items-center gap-3 ml-auto mt-6'>
        <button
          type="submit"
          className="btn btn-success text-white"
          disabled={isLoading}
        >
          {isLoading ? "Success..." : "Success"}
        </button>
        <button
          onClick={() => reset()}
          className="btn btn-error text-white"
        >
          Reset
        </button>
      </div>
    </form>
  )
}

export default AddCardModal



