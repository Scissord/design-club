import { FC, useContext, useState } from 'react';
import { useCreateCardMutation } from '@store/api/dealsApi';
import { ViewContext } from '@context';
import { IError, IAddDealForm } from '@interfaces';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDealSchema } from '@validation';
import { useAppDispatch, useNavigate } from '@hooks';

type AddDealProps = {
  status: number
};

const AddDeal: FC<AddDealProps> = ({ status }) => {
  const DEFAULT_NEW_DEAL = {
    price: 0,
    client_id: null,
    status
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const context = useContext(ViewContext);

  const [createCard, { isError, isLoading }] = useCreateCardMutation();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IAddDealForm>({
    mode: "onBlur",
    resolver: yupResolver(addDealSchema),
  });

  const handleAddCard = async () => {
    try {

    } catch (error) {
      const typedError = error as IError;
      context?.notification.show(typedError?.data?.error || typedError.message || 'An error occurred', 'error');
    }
  };

  const onSubmit: SubmitHandler<IAddDealForm> = async (data) => {
    try {
      await createCard().unwrap();
      // isSuccess &&
    } catch (error) {
      const typedError = error as IError;
      context?.notification.show(typedError?.data?.error || typedError.message || 'An error occurred', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-6">
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="text"
          className="grow w-full"
          // value={"scissxrd"}
          placeholder="Username"
          {...register("name")}
        />
      </label>
      {errors.name && <div className="text-red-500">{errors.name.message}</div>}
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="text"
          className="grow w-full"
          // value={"+77762643168"}
          placeholder="Phone"
          {...register("phone")}
        />
      </label>
      {errors.phone && <div className="text-red-500">{errors.phone.message}</div>}
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="password"
          className="grow w-full"
          placeholder="******"
          // value={"Surgood123#"}
          {...register("password")}
        />
      </label>
      {errors.password && <div className="text-red-500">{errors.password.message}</div>}
      <label className="input input-bordered flex items-center gap-2 w-full">
        <input
          type="password"
          className="grow w-full"
          placeholder="******"
          // value={"Surgood123#"}
          {...register("confirmPassword")}
        />
      </label>
      {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword.message}</div>}
      <div className="flex gap-4 w-full">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value={0}
            {...register("gender")}
            className="mr-2"
            defaultChecked
          />
          Male
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value={1}
            {...register("gender")}
            className="mr-2"
          />
          Female
        </label>
      </div>
      {errors.gender && <div className="text-red-500">{errors.gender.message}</div>}
      <button type="submit" className="btn btn-active btn-secondary" disabled={isLoading}>
        {isLoading ? "Signing Up..." : "SignUp"}
      </button>
      {isError && <div className="text-red-500">Signup failed. Please try again.</div>}
    </form>
  )
}

export default AddDeal