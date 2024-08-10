import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '@interfaces';
import baseQueryWithReAuth from '@store/middleware/authMiddleware';

interface GetProductsQueryParams {
  limit?: number;
  page?: number;
  search?: string;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ limit = 10, page = 1, search = "" }: GetProductsQueryParams) => {
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

export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } = productsApi;