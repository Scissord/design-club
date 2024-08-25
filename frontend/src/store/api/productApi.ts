import { createApi } from '@reduxjs/toolkit/query/react';
import { IProduct } from '@interfaces';
import baseQueryWithReAuth from '@store/middleware/authMiddleware';

interface GetProductsQueryParams {
  limit?: number;
  page?: number;
  search?: string;
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ limit, page, search }: GetProductsQueryParams) => {
        const params = new URLSearchParams();
        if (limit) params.append('limit', limit.toString());
        if (page) params.append('page', page.toString());
        if (search) params.append('search', search);

        return `/products?${params.toString()}`;
      },
      providesTags: (result) => {
        if (result.products) {
          return [
            ...result?.products.map(({ id }: IProduct) => ({ type: 'Products', id })),
            { type: 'Products', id: 'LIST' }
          ]
        } else {
          return [{ type: 'Products', id: 'LIST' }];
        }
      },
    }),
    getAllProducts: build.query({
      query: () => ({
        method: 'GET',
        url: '/products/all',
      }),
    }),
    addProduct: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/products',
        body
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `/products/${id}`,
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    }),
  })
});

export const {
  useGetProductsQuery,
  useGetAllProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} = productApi;
