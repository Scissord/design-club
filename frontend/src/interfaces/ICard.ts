import { IProduct } from "@interfaces";

export type ICard = {
  id: string | null;
  price: number | 0;
  client_name: string | "";
  source_name: string | "";
  column_id: string | null;
  created_at: Date | null;
  avatar: string | "";
  creator_name: string | "";
  progress: number | 0;
  items: IProduct[] | [];
};
