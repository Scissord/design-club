import { FC } from 'react';
import { IAddCardForm } from '@interfaces';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addCardSchema } from '@validation';
import { FormButtons } from '@components';
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
    resolver: yupResolver(addCardSchema),
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
      className="grid grid-cols-3 gap-3 w-full"
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
      <FormButtons
        isLoading={isLoading}
        secondButtonFunction={reset}
      />
    </form>
  )
}

export default AddCardModal



