import { ChangeEvent, FC, useContext } from 'react'
import { ViewContext } from '@context';
import { Search } from '@ui';
import AddProduct from '../modals/AddProduct';

type ProductsTopSectionProps = {
  limit: number;
  setLimit: (limit: number) => void;
  search: string;
  setSearch: (text: string) => void;
  setPage: (page: number) => void;
};

const ProductsTopSection: FC<ProductsTopSectionProps> = (props) => {
  const {
    limit, setLimit,
    search, setSearch,
    setPage
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
      <select
        value={limit}
        onChange={(e:  | ChangeEvent<HTMLSelectElement>) => setLimit(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
      <Search
        value={search}
        onChange={(text: string) => {
          setPage(1);
          setSearch(text);
        }}
      />
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