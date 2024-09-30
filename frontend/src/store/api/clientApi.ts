import { createApi } from '@reduxjs/toolkit/query/react';
import { IClient, IGetQueryParams } from '@interfaces';
import baseQueryWithReAuth from '@store/middleware/authMiddleware';

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Clients'],
  endpoints: (build) => ({
    getClients: build.query({
      query: ({ limit, page, search }: IGetQueryParams) => {
        const params = new URLSearchParams();
        if (limit) params.append('limit', limit.toString());
        if (page) params.append('page', page.toString());
        if (search) params.append('search', search);

        return `/clients?${params.toString()}`;
      },
      providesTags: (result) => {
        if (result.clients) {
          return [
            ...result.clients.map(({ id }: IClient) => ({ type: 'Clients', id })),
            { type: 'Clients', id: 'LIST' }
          ]
        } else {
          return [{ type: 'Clients', id: 'LIST' }];
        }
      },
    }),
    getAllClients: build.query({
      query: () => ({
        method: 'GET',
        url: '/clients/all',
      }),
    }),
    addClient: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/clients',
        body
      }),
      invalidatesTags: [{ type: 'Clients', id: 'LIST' }]
    }),
    deleteClient: build.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `/clients/${id}`,
      }),
      invalidatesTags: [{ type: 'Clients', id: 'LIST' }]
    }),
  })
});

export const {
  useGetClientsQuery,
  useGetAllClientsQuery,
  useAddClientMutation,
  useDeleteClientMutation,
} = clientApi;
