import { FC, useState } from 'react';
import {
  useGetProductsQuery, useAddProductMutation, useDeleteProductMutation
} from '@store/api/productsApi';
import { useAppSelector, useAppDispatch } from '@hooks';
import { decrement, increment, incrementByAmount } from '@store/reducers/counterSlice';
import { Loader } from '@ui';

interface IGood {
  id: string;
  name: string;
}

const Home: FC = () => {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const { data = [], isLoading } = useGetProductsQuery(limit);
  // , { isError }
  const [addProduct] = useAddProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleAddProduct = async () => {
    if(newProduct) {
      //.unwrap(); is using to take correct data from second index of useAddProductMutation, like isError
      await addProduct({ name: newProduct }).unwrap();
      setNewProduct("");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    //.unwrap(); is using to take correct data from second index of useDeleteProductMutation, like isError
    await deleteProduct(id).unwrap();
  };

  if(isLoading) return <Loader/>

  return (
    <div className="flex w-full min-h-[100vh] overflow-y-auto p-4">
      <div>
        <select value={limit} onChange={(e) => setLimit(e.target.value)}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input
          type="text"
          className='border border-slate-300'
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <button onClick={() => handleAddProduct()}>
          add product
        </button>
        <ul>
          {data.map((item: IGood) => (
            <li key={item.id} onClick={() => handleDeleteProduct(item.id)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className='mx-6 my-6 border border-slate-300'>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(incrementByAmount(10))}
          >
            incrementByAmount
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home
