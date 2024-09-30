import { useContext, useState } from "react";
import {
  useGetSourcesQuery,
  useAddSourceMutation,
  useDeleteSourceMutation,
} from "@store/api/sourceApi";
import { ViewContext } from "@context";
import { IAddSourceForm, IError } from "@interfaces";

export const useSources = () => {
  const context = useContext(ViewContext);

  const [limit, setLimit] = useState<number>(20);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  const { data = [], isLoading } = useGetSourcesQuery({ limit, page, search });
  const [addSource, { isError, isLoading: isCreateLoading }] = useAddSourceMutation();
  const [deleteSource] = useDeleteSourceMutation();

  const handleDeleteSource = async (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete this client?");
    if(confirm) {
      await deleteSource(id).unwrap();
    }
  };

  const handleCreateSource = async (data: IAddSourceForm) => {
    try {
      await addSource(data).unwrap();
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
    handleDeleteSource,
    handleCreateSource,
    isCreateLoading,
    isCreateError: isError,
  };
};
