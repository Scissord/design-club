import { IProduct } from "@interfaces";

export const productFields = [
  {
    header: 'Name',
    render: (item: IProduct) => <span>{item.name}</span>,
  },
  {
    header: 'Price',
    render: (item: IProduct) => <span>{item.price}</span>,
  },
];
