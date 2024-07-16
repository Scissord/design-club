import { FC, useContext, useState } from 'react';
import {
  useAddProductMutation,
} from '@store/api/productsApi';
import { ViewContext } from '@context';

const DEFAULT_NEW_PRODUCT = {
  name: '',
  job: '',
  company: '',
  location: '',
  favoriteColor: '',
}

const AddProduct: FC = () => {
  const context = useContext(ViewContext);

  const [newProduct, setNewProduct] = useState(DEFAULT_NEW_PRODUCT);

  const [addProduct] = useAddProductMutation();

  const handleResetProduct = () => {
    setNewProduct(DEFAULT_NEW_PRODUCT);
  };

  const handleCreateProduct = async () => {
    if(newProduct) {
      //.unwrap(); is using to take correct data from second index of useAddProductMutation, like isError
      await addProduct(newProduct).unwrap();
      context?.modal.hide();
      setNewProduct(DEFAULT_NEW_PRODUCT);
    }
  };

  return (
    <div className='flex flex-col gap-3 py-3'>
      <div className='flex items-center gap-3'>
      <p className='font-bold text-[18px] w-40'>Name</p>
      <input
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className='flex items-center gap-3'>
      <p className='font-bold text-[18px] w-40'>Job</p>
      <input
        value={newProduct.job}
        onChange={(e) => setNewProduct({ ...newProduct, job: e.target.value })}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className='flex items-center gap-3'>
      <p className='font-bold text-[18px] w-40'>Company</p>
      <input
        value={newProduct.company}
        onChange={(e) => setNewProduct({ ...newProduct, company: e.target.value })}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className='flex items-center gap-3'>
      <p className='font-bold text-[18px] w-40'>Location</p>
      <input
        value={newProduct.location}
        onChange={(e) => setNewProduct({ ...newProduct, location: e.target.value })}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>
      <div className='flex items-center gap-3'>
      <p className='font-bold text-[18px] w-40'>Favorite Color</p>
      <input
        value={newProduct.favoriteColor}
        onChange={(e) => setNewProduct({ ...newProduct, favoriteColor: e.target.value })}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      </div>

      <div className='flex items-center gap-3 ml-auto mt-6'>
        <button
          onClick={() => handleCreateProduct()}
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