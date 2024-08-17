import { FC } from 'react';
import { useProducts } from '@hooks';
import ProductsTopSection from './blocks/ProductsTopSection';
import ProductsTableSection from './blocks/ProductsTableSection';

const Products: FC = () => {
  const {
    limit, setLimit,
    search, setSearch,
    page, setPage, data,
    isGetLoading, handleDeleteProduct,
    handleCreateProduct, isCreateLoading,
    isCreateError,
  } = useProducts();

  return (
    <>
      <ProductsTopSection
        limit={limit}
        setLimit={setLimit}
        search={search}
        setSearch={setSearch}
        setPage={setPage}
        isGetLoading={isGetLoading}
        handleCreateProduct={handleCreateProduct}
        isCreateLoading={isCreateLoading}
        isCreateError={isCreateError}
      />
      <ProductsTableSection
        products={data?.products}
        lastPage={data?.lastPage}
        page={page}
        setPage={setPage}
        handleDeleteProduct={handleDeleteProduct}
      />
    </>
  )
}

export default Products;
