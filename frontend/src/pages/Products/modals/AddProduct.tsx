import { FC } from 'react';
import { IAddProductForm } from '@interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { addProductSchema } from '@validation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormButtons } from '@components';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import Price from './AddProduct/Price';
import Name from './AddProduct/Name';

type AddProductProps = {
  handleCreateProduct: (data: IAddProductForm) => void;
  isLoading: boolean;
  isError: boolean;
};

const AddProduct: FC<AddProductProps> = (props) => {
  const { handleCreateProduct, isLoading, isError } = props;

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<IAddProductForm>({
    mode: "onBlur",
    resolver: yupResolver(addProductSchema),
    defaultValues: {
      name: "",
      price: 0,
    },
  });

  const onSubmit: SubmitHandler<IAddProductForm> = async (data) => {
    handleCreateProduct(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-3 gap-3 w-full"
    >
      <Name
        register={register}
        errors={errors}
      />
      <Price
        register={register}
        errors={errors}
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

export default AddProduct;

{/* <div className='col-span-2'>
  <DatePicker
    selected={newProduct.lastLogin}
    className='input input-bordered input-secondary'
    onChange={(date) => {
      date && setNewProduct({ ...newProduct, lastLogin: date });
    }}
  />
</div> */}
