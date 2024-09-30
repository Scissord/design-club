import * as Yup from "yup";

export const addProductSchema = Yup.object().shape({
  name: Yup.string()
    .required('Введите название продукта'),
  price: Yup.number()
    .typeError('Цена должна быть числом')
    .positive('Цена должна быть больше 0')
    .test('is-decimal', 'Цена должна быть числом и может содержать не более двух знаков после запятой', (value) =>
      value !== undefined && /^-?\d+(\.\d{1,2})?$/.test(value.toString())
    )
    .required('Цена обязательна'),
});