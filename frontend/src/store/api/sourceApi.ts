import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReAuth from '@store/middleware/authMiddleware';

export const sourceApi = createApi({
  reducerPath: 'sourceApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Sources'],
  endpoints: (build) => ({
    // getColumns: build.query({
    //   query: () => ({
    //     method: 'GET',
    //     url: '/columns',
    //   }),
    //   providesTags: ['Sources'],
    // }),
    getAllSources: build.query({
      query: () => ({
        method: 'GET',
        url: '/sources/all',
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
  useGetAllSourcesQuery
} = sourceApi;
