import { FC } from 'react'
import { IProduct } from '@interfaces';
import { productFields, productsHeaders } from '@constants';
import { Pagination, Table } from '@ui';

type ProductsTopSectionProps = {
  products: IProduct[];
  lastPage: number;
  page: number;
  setPage: (page: number | ((prevPage: number) => number)) => void;
  handleDeleteProduct: (id: string) => void;
};

const ProductsTableSection: FC<ProductsTopSectionProps> = (props) => {
  const {
    products, lastPage,
    page, setPage, handleDeleteProduct
  } = props;

  return (
    <section className="h-[86vh] overflow-x-auto px-2">
      <Table
        data={products}
        headers={productsHeaders}
        fields={productFields}
        handleEdit={handleDeleteProduct}
        handleDelete={handleDeleteProduct}
      />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={lastPage}
      />
    </section>
  )
}

export default ProductsTableSection