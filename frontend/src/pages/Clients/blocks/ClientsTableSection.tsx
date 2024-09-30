import { FC } from 'react'
import { IClient } from '@interfaces';
import { clientFields, clientsHeaders } from '@constants';
import { Pagination, Table } from '@ui';

type ClientsTopSectionProps = {
  clients: IClient[];
  lastPage: number;
  page: number;
  setPage: (page: number | ((prevPage: number) => number)) => void;
  handleDeleteClient: (id: string) => void;
};

const ClientsTableSection: FC<ClientsTopSectionProps> = (props) => {
  const {
    clients, lastPage,
    page, setPage, handleDeleteClient
  } = props;

  return (
    <section className="h-[86vh] overflow-x-auto px-2">
      <Table
        data={clients}
        headers={clientsHeaders}
        fields={clientFields}
        handleEdit={handleDeleteClient}
        handleDelete={handleDeleteClient}
      />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={lastPage}
      />
    </section>
  )
}

export default ClientsTableSection