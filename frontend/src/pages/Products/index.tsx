import { FC, useState } from 'react';
import {
  useGetProductsQuery,
} from '@store/api/productsApi';
import { Loader } from '@ui';
import ProductsTopSection from './blocks/ProductsTopSection';
import ProductsTableSection from './blocks/ProductsTableSection';

const Products: FC = () => {
  const [limit, setLimit] = useState("20");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data = [], isLoading } = useGetProductsQuery({ limit, page, search });

  // const isLoading = true;
  if(isLoading) return <Loader/>

  return (
    <div className="min-h-[100vh]">
      <ProductsTopSection
        limit={limit}
        setLimit={setLimit}
        search={search}
        setSearch={setSearch}
      />
      <ProductsTableSection
        data={data}
        page={page}
        setPage={setPage}
      />
    </div>

  )
}

export default Products