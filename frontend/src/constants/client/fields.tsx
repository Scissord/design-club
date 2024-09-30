import { IClient } from "@interfaces";
import { DateFormat } from "@utils";

export const clientFields = [
  {
    header: 'name',
    render: (item: IClient) => <span>{item.name}</span>,
  },
  {
    header: 'created_at',
    render: (item: IClient) => <span>{DateFormat(item.created_at, 'H:i d.m.Y')}</span>,
  },
  {
    header: 'updated_at',
    render: (item: IClient) => <span>{DateFormat(item.updated_at, 'H:i d.m.Y')}</span>,
  },
];
