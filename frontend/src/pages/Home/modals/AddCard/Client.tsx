import { FC } from "react";
import { UseFormRegister, FieldValues, FieldErrors  } from "react-hook-form";
import { IAddCardForm } from "@interfaces";
import Label from "./Label";

type ClientProps = {
  register: UseFormRegister<IAddCardForm>;
  errors: FieldErrors<FieldValues>;
};

const clients = [
  { id: 1, label: 'ИП Ульянов' },
  { id: 2, label: 'BI GROUP' },
  { id: 3, label: '"ТОО ТРАХ"' },
];

const Client: FC<ClientProps> = ({ register, errors }) => {
  return (
    <>
      <Label label={"Client"}/>
      <div className='col-span-2'>
        <select
          className="bg-white text-black select select-bordered w-full max-w-xs"
          {...register("client_id")}
        >
          {clients.map((client) => (
            <option key={client.id} value={client.id}>{client.label}</option>
          ))}
        </select>
      </div>
      {/* {errors.client?.message && (
        <div className="text-red-500">
          {typeof errors.client.message === 'string' ? errors.client.message : 'Invalid input'}
        </div>
      )} */}
    </>
  )
}

export default Client