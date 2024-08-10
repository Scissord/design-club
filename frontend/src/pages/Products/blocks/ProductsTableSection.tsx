import { FC, useState } from 'react'
import { useDeleteProductMutation } from '@store/api/productsApi';
import { IProduct } from '@interfaces';
import { productsHeaders } from '@constants';
import { IconTrash } from '@icons';
import { DateFormat } from '@utils';

type ProductsTopSectionProps = {
  products: IProduct[];
  lastPage: number;
  page: number;
  setPage: (page: number | ((prevPage: number) => number)) => void;
}

const ProductsTableSection: FC<ProductsTopSectionProps> = (props) => {
  const {
    products, lastPage,
    page, setPage
  } = props;

  const [iconsIndex, setIconsIndex] = useState<number | null>(null);

  const [deleteProduct, { isError }] = useDeleteProductMutation();

  const handleDeleteProduct = async (id: string | number) => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    //.unwrap(); is using to take correct data from second index of useDeleteProductMutation, like isError
    if(confirm) {
      await deleteProduct(id).unwrap();
    }
  };

  return (
    <section className="h-[86vh] overflow-x-auto px-2">
      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            {productsHeaders.map((header) => (
              <th
                key={header.id}
                className={`
                  bg-indigo-950 text-white
                `}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr
              key={product.id}
              className={`
                bg-white
                hover:bg-gray-200
              `}
              onMouseEnter={() => setIconsIndex(index)}
              onMouseLeave={() => setIconsIndex(null)}
            >
              <th
                className={`
                  bg-indigo-950 text-white
                `}
              >
                {index + 1}
              </th>
              <td>{product.name}</td>
              <td>{product.job}</td>
              <td>{product.company}</td>
              <td>{product.location}</td>
              <td>{DateFormat(product.lastLogin, 'H:i d.m.Y')}</td>
              <td className='flex items-center justify-between'>
                {product.favoriteColor}
                {iconsIndex === index && (
                  <div className='flex items-center'>
                    <div
                      onClick={() => handleDeleteProduct(product.id)}
                      className='cursor-pointer'
                    >
                      <IconTrash width="1.3em" height="1.3em"/>
                    </div>
                  </div>
                )}
              </td>
              <th
                className={`
                  bg-indigo-950 text-white
                `}
              >
                {index + 1}
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {productsHeaders.map((header) => (
              <th
                key={header.id}
                className={`
                  bg-indigo-950 text-white
                `}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </tfoot>
      </table>

      <div className="join mt-6 ml-3">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          className="join-item btn"
        >
          «
        </button>
        <button className="join-item btn">Page {page}</button>
        <button
          onClick={() => setPage((prev) => {
            if (prev < lastPage) {
              return prev + 1;
            }
            return prev;
          })}
          className="join-item btn"
        >
          »
        </button>
      </div>
    </section>
  )
}

export default ProductsTableSection