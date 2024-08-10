import { IProduct } from "@interfaces";
// Define type for form data
export type IAddDealForm = {
  price: number;
  source: number;
  responsible_id: number;
  client_id: number;
  products: IProduct[];
  payment_check: any;
  attorney_power: any;
  closing_documents: any;
};