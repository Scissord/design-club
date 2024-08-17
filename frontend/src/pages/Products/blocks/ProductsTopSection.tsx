import { FC, useContext } from 'react'
import { ViewContext } from '@context';
import { Search, Select, Button } from '@ui';
import { limits } from '@constants';
import AddProduct from '../modals/AddProduct';

type ProductsTopSectionProps = {
  limit: number;
  setLimit: (limit: number) => void;
  search: string;
  setSearch: (text: string) => void;
  setPage: (page: number) => void;
  isGetLoading: boolean;
  handleCreateProduct: (data: IAddProductForm) => void;
  isCreateLoading: boolean;
  isCreateError: boolean;
};

const css = {
  container: `
    h-[14vh] flex items-center gap-6 px-3
  `
};

const ProductsTopSection: FC<ProductsTopSectionProps> = (props) => {
  const {
    limit, setLimit,
    search, setSearch,
    setPage, isGetLoading,
    handleCreateProduct,
    isCreateLoading,
    isCreateError,
  } = props;

  const context = useContext(ViewContext);

  const handleOpenAddProductModal = () => {
    context?.modal.show({
      title: 'Add Product',
      children: <AddProduct
        handleCreateProduct={handleCreateProduct}
        isCreateLoading={isCreateLoading}
        isCreateError={isCreateError}
      />
    })
  };

  return (
    <section className={css.container}>
      <Select
        value={limit}
        onChange={(val: string) => setLimit(Number(val))}
        options={limits}
      />
      <Search
        value={search}
        onChange={(text: string) => {
          setPage(1);
          setSearch(text);
        }}
        loading={isGetLoading}
      />
      <Button
        label={"Add Product"}
        onChange={() => handleOpenAddProductModal()}
        className="ml-auto"
      />
    </section>
  )
}

export default ProductsTopSection
