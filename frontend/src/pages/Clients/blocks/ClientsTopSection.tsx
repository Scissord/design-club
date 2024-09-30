import { FC, useContext } from 'react'
import { ViewContext } from '@context';
import { Search, Select, Button } from '@ui';
import { limits } from '@constants';
import { IAddClientForm } from '@interfaces';
import AddClient from '../modals/AddClient';

type ClientsTopSectionProps = {
  limit: number;
  setLimit: (limit: number) => void;
  search: string;
  setSearch: (text: string) => void;
  setPage: (page: number) => void;
  isGetLoading: boolean;
  handleCreateClient: (data: IAddClientForm) => void;
  isCreateLoading: boolean;
  isCreateError: boolean;
};

const css = {
  container: `
    h-[14vh] flex items-center gap-6 px-3
  `
};

const ClientsTopSection: FC<ClientsTopSectionProps> = (props) => {
  const {
    limit, setLimit,
    search, setSearch,
    setPage, isGetLoading,
    handleCreateClient,
    isCreateLoading,
    isCreateError,
  } = props;

  const context = useContext(ViewContext);

  const handleOpenAddProductModal = () => {
    context?.modal.show({
      title: 'Add Product',
      children: <AddClient
        handleCreateClient={handleCreateClient}
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

export default ClientsTopSection;
