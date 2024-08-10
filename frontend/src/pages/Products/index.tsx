import { FC, useState } from 'react';
import {
  useGetProductsQuery,
} from '@store/api/productsApi';
import ProductsTopSection from './blocks/ProductsTopSection';
import ProductsTableSection from './blocks/ProductsTableSection';

const Products: FC = () => {
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  const { data = [] } = useGetProductsQuery({ limit, page, search });

  return (
    <>
      <ProductsTopSection
        limit={limit}
        setLimit={setLimit}
        search={search}
        setSearch={setSearch}
        setPage={setPage}
      />
      <ProductsTableSection
        products={data?.products}
        lastPage={data?.lastPage}
        page={page}
        setPage={setPage}
      />
    </>
  )
}

export default Products