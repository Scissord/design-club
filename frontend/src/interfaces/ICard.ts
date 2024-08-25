import { IProduct } from "@interfaces";

export type ICard = {
  id: string;
  price: number;
  client_name: string;
  source_name: string;
  column_id: string;
  created_at: Date;
  avatar: string;
  creator_name: string;
  items: IProduct[];
};
