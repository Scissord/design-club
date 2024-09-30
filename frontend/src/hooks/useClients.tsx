import { useContext, useState } from "react";
import {
  useGetClientsQuery,
  useAddClientMutation,
  useDeleteClientMutation,
} from "@store/api/clientApi";
import { ViewContext } from "@context";
import { IAddClientForm, IError } from "@interfaces";

export const useClients = () => {
  const context = useContext(ViewContext);

  const [limit, setLimit] = useState<number>(20);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  const { data = [], isLoading } = useGetClientsQuery({ limit, page, search });
  const [addClient, { isError, isLoading: isCreateLoading }] = useAddClientMutation();
  const [deleteClient] = useDeleteClientMutation();

  const handleDeleteClient = async (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete this client?");
    if(confirm) {
      await deleteClient(id).unwrap();
    }
  };

  const handleCreateClient = async (data: IAddClientForm) => {
    try {
      await addClient(data).unwrap();
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
    handleDeleteClient,
    handleCreateClient,
    isCreateLoading,
    isCreateError: isError,
  };
};
