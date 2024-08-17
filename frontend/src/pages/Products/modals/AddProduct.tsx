import { FC, useContext, useState } from 'react';
import { ViewContext } from '@context';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type AddProductProps = {
  handleCreateProduct: (data: IAddProductForm) => void;
  isCreateLoading: boolean;
  isCreateError: boolean;
};

const DEFAULT_NEW_PRODUCT = {
  name: '',
  job: '',
  company: '',
  location: '',
  favoriteColor: '',
  lastLogin: new Date(),
}

const AddProduct: FC<AddProductProps> = (props) => {
  const {
    handleCreateProduct,
    isCreateLoading,
    isCreateError
  } = props;
  const context = useContext(ViewContext);

  const [newProduct, setNewProduct] = useState(DEFAULT_NEW_PRODUCT);


  const handleResetProduct = () => {
    setNewProduct(DEFAULT_NEW_PRODUCT);
  };

  const onSubmit = async () => {
    handleCreateProduct(newProduct);
  };

  return (
    <div className='grid grid-cols-3 gap-3 w-full py-6'>
      <div className='col-span-1'>
        <p className='font-bold text-[18px]'>lastLogin</p>
      </div>
      <div className='col-span-2'>
        <DatePicker
          selected={newProduct.lastLogin}
          className='input input-bordered input-secondary'
          onChange={(date) => {
            date && setNewProduct({ ...newProduct, lastLogin: date });
          }}
        />
      </div>

      <div className='col-span-1'>
        <p className='font-bold text-[18px]'>Name</p>
      </div>
      <div className='col-span-2'>
        <input
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full"
        />
      </div>

      <div className='col-span-1'>
        <p className='font-bold text-[18px]'>Job</p>
      </div>
      <div className='col-span-2'>
        <input
          value={newProduct.job}
          onChange={(e) => setNewProduct({ ...newProduct, job: e.target.value })}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full"
        />
      </div>

      <div className='col-span-1'>
        <p className='font-bold text-[18px]'>Company</p>
      </div>
      <div className='col-span-2'>
        <input
          value={newProduct.company}
          onChange={(e) => setNewProduct({ ...newProduct, company: e.target.value })}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full"
        />
      </div>

      <div className='col-span-1'>
        <p className='font-bold text-[18px]'>Location</p>
      </div>
      <div className='col-span-2'>
        <input
          value={newProduct.location}
          onChange={(e) => setNewProduct({ ...newProduct, location: e.target.value })}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full"
        />
      </div>

      <div className='col-span-1'>
        <p className='font-bold text-[18px]'>Favorite Color</p>
      </div>
      <div className='col-span-2'>
        <input
          value={newProduct.favoriteColor}
          onChange={(e) => setNewProduct({ ...newProduct, favoriteColor: e.target.value })}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full"
        />
      </div>


      <div className='col-span-3 flex items-center gap-3 ml-auto mt-6'>
        <button
          onClick={() => onSubmit()}
          className="btn btn-success text-white"
        >
          Success
        </button>
        <button
          onClick={() => handleResetProduct()}
          className="btn btn-error text-white"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default AddProduct;