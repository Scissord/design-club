import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface GetProductsQueryParams {
  limit?: string;
  page?: number;
  search?: string;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ limit = "20", page = 1, search = "" }: GetProductsQueryParams) => {
        const params = new URLSearchParams();
        if (limit) params.append('limit', limit);
        if (page) params.append('page', page.toString());
        if (search) params.append('search', search);

        return `/products?${params.toString()}`;
      },
      providesTags: (result) => result
        ? [
          ...result.map(({ id }: { id: string }) => ({ type: 'Products', id })),
          { type: 'Products', id: 'LIST' }
        ]
        : [{ type: 'Products', id: 'LIST' }],
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