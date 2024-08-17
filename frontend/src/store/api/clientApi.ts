import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReAuth from '@store/middleware/authMiddleware';

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Clients'],
  endpoints: (build) => ({
    // getColumns: build.query({
    //   query: () => ({
    //     method: 'GET',
    //     url: '/columns',
    //   }),
    //   providesTags: ['Sources'],
    // }),
    getAllClients: build.query({
      query: () => ({
        method: 'GET',
        url: '/clients/all',
      }),
    }),
    // createCard: build.mutation({
    //   query: ({ columnId, body }: { columnId: string; body: IAddCardForm }) => ({
    //     method: 'POST',
    //     url: `/columns/${columnId}`,
    //     body
    //   }),
    //   invalidatesTags: ['Sources']
    // }),
  })
});

export const {
  useGetAllClientsQuery
} = clientApi;
