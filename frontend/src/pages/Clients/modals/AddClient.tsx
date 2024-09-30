import { FC, useContext, useState } from 'react';
import { ViewContext } from '@context';
import { IAddClientForm } from '@interfaces';
import "react-datepicker/dist/react-datepicker.css";

type AddClientProps = {
  handleCreateClient: (data: IAddClientForm) => void;
  isCreateLoading: boolean;
  isCreateError: boolean;
};

const DEFAULT_NEW_PRODUCT = {
  name: '',
  job: '',
  company: '',
  location: '',
  favoriteColor: '',
  lastLogin: new Date(),
};

const AddClient: FC<AddClientProps> = (props) => {
  const {
    handleCreateClient,
    isCreateLoading,
    isCreateError
  } = props;
  const context = useContext(ViewContext);

  const [newProduct, setNewProduct] = useState(DEFAULT_NEW_PRODUCT);


  const handleResetProduct = () => {
    setNewProduct(DEFAULT_NEW_PRODUCT);
  };

  const onSubmit = async () => {
    handleCreateClient(newProduct);
  };

  return (
    <div>

    </div>
  )
}

export default AddClient;