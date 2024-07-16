import { FC, useContext } from 'react'
import { ViewContext } from '@context';
import AddProduct from '../modals/AddProduct';

type ProductsTopSectionProps = {
  limit: string;
  setLimit: (limit: string) => void;
  search: string;
  setSearch: (text: string) => void;
};

const ProductsTopSection: FC<ProductsTopSectionProps> = (props) => {
  const {
    limit, setLimit,
    search, setSearch
  } = props;

  const context = useContext(ViewContext);

  const handleOpenAddProductModal = () => {
    context?.modal.show({
      title: 'Add Product',
      children: <AddProduct/>
    })
  };

  return (
    <section className='h-[14vh] flex items-center justify-between px-3'>
        <select value={limit} onChange={(e) => setLimit(e.target.value)}>
          {/* <option value="">All</option> */}
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
        </select>
        <label className="input input-bordered flex items-center gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
        {/* <input
          type="text"
          className='border border-slate-300'
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <button onClick={() => handleAddProduct()}>
          add product
        </button>
        <ul>
          {data.map((item: IProduct) => (
            <li key={item.id} onClick={() => handleDeleteProduct(item.id)}>
              {item.name}
            </li>
          ))}
        </ul> */}
      <button
        onClick={() => handleOpenAddProductModal()}
        className="btn btn-active btn-secondary"
      >
        Add Product
      </button>
    </section>
  )
}

export default ProductsTopSection