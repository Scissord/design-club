import * as Yup from "yup";

export const addDealSchema = Yup.object().shape({
  price: Yup.number()
    .moreThan(0, 'Price must be greater than 0')
    .required('Price is required'),
  source_id: Yup.number()
    .integer('Source must be an integer')
    .oneOf([0, 1, 2], 'Source must be one of 0, 1, or 2')
    .required('Source is required'),
  client_id: Yup.number()
    .integer('Client ID must be an integer')
    .required('Client ID is required'),
  products: Yup.array()
    .of(Yup.string().required('Product ID is required'))
    .min(1, 'There must be at least one product')
    .required('Products are required'),
  // responsible_id: Yup.number()
  //   .integer('Responsible ID must be an integer')
  //   .required('Responsible ID is required'),
  // payment_check: Yup.array()
  //   .of(
  //     Yup.object().shape({
  //       pdf: Yup.mixed()
  //         .required('PDF file is required')
  //         .test(
  //           'fileType',
  //           'Only PDF files are allowed',
  //           (value) => value && value.type === 'application/pdf'
  //         )
  //     })
  //   )
  //   .min(1, 'There must be at least one payment check')
  //   .required('Payment checks are required'),
  // attorney_power: Yup.array()
  //   .of(
  //     Yup.object().shape({
  //       pdf: Yup.mixed()
  //         .required('PDF file is required')
  //         .test(
  //           'fileType',
  //           'Only PDF files are allowed',
  //           (value) => value && value.type === 'application/pdf'
  //         )
  //     })
  //   )
  //   .min(1, 'There must be at least one attorney power document')
  //   .required('Attorney power documents are required'),
  // closing_documents: Yup.array()
  //   .of(
  //     Yup.mixed()
  //       .required('Closing document is required')
  //       .test(
  //         'fileType',
  //         'Only XLSX files are allowed',
  //         (value) => value && value.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  //       )
  //   )
  //   .min(1, 'There must be at least one closing document')
  //   .required('Closing documents are required')
});