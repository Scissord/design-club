import { IProduct } from "@interfaces";
import { DateFormat } from "@utils";

export const productFields = [
  {
    header: 'Name',
    render: (item: IProduct) => <span>{item.name}</span>,
  },
  {
    header: 'Job',
    render: (item: IProduct) => <span>{item.job}</span>,
  },
  {
    header: 'Company',
    render: (item: IProduct) => <span>{item.company}</span>,
  },
  {
    header: 'Location',
    render: (item: IProduct) => <span>{item.location}</span>,
  },
  {
    header: 'Last Login',
    render: (item: IProduct) => <span>{DateFormat(item.lastLogin, 'H:i d.m.Y')}</span>,
  },
  {
    header: 'Favorite Color',
    render: (item: IProduct) => <span>{item.favoriteColor}</span>,
  },
];
