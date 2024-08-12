import { FC, useContext } from 'react';
import { ViewContext } from '@context';
import { IError, IAddCardForm } from '@interfaces';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateCardMutation } from '@store/api/columnsApi';
import { addDealSchema } from '@validation';

import Price from './AddCard/Price';
import Source from './AddCard/Source';
import Client from './AddCard/Client';
import Products from './AddCard/Products';

type AddDealProps = {
  columnId: string;
};

const AddCardModal: FC<AddDealProps> = ({ columnId }) => {
  const context = useContext(ViewContext);

  const [createCard, { isError, isLoading }] = useCreateCardMutation();

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
      products: [],
    },
  });

  const onSubmit: SubmitHandler<IAddCardForm> = async (data) => {
    console.log(data);
    // try {
    //   await createCard(data).unwrap();
    //   context?.modal.hide();
    //   // isSuccess &&
    // } catch (error) {
    //   const typedError = error as IError;
    //   context?.notification.show(typedError?.data?.error || 'An error occurred', 'error');
    // }
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
        register={register}
        errors={errors}
      />

      <Products
        control={control}
      />

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
      {isError && <div className="text-red-500">Request failed. Please try again.</div>}
    </form>
  )
}

export default AddCardModal



