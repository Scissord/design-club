import { useContext, useState } from "react";
import {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} from "@store/api/productApi";
import { ViewContext } from "@context";
import { IError } from "@interfaces";

export const useProducts = () => {
  const context = useContext(ViewContext);

  const [limit, setLimit] = useState<number>(20);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  const { data = [], isLoading } = useGetProductsQuery({ limit, page, search });
  const [addProduct] = useAddProductMutation();
  const [deleteProduct, { isError, isLoading: isCreateLoading }] = useDeleteProductMutation();

  const handleDeleteProduct = async (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if(confirm) {
      await deleteProduct(id).unwrap();
    }
  };

  const handleCreateProduct = async (data: IAddProductForm) => {
    try {
      await addProduct(data).unwrap();
      context?.modal.hide();
    } catch (error) {
      const typedError = error as IError;
      context?.notification.show(typedError?.data?.error || 'An error occurred', 'error');
    }
  };

  return {
    limit,
    setLimit,
    page,
    setPage,
    search,
    setSearch,
    data,
    isGetLoading: isLoading,
    handleDeleteProduct,
    handleCreateProduct,
    isCreateLoading,
    isCreateError: isError,
  };
};
