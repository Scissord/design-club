import { createApi } from '@reduxjs/toolkit/query/react';
import { IGetQueryParams, ISource } from '@interfaces';
import baseQueryWithReAuth from '@store/middleware/authMiddleware';

export const sourceApi = createApi({
  reducerPath: 'sourceApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Sources'],
  endpoints: (build) => ({
    getSources: build.query({
      query: ({ limit, page, search }: IGetQueryParams) => {
        const params = new URLSearchParams();
        if (limit) params.append('limit', limit.toString());
        if (page) params.append('page', page.toString());
        if (search) params.append('search', search);

        return `/sources?${params.toString()}`;
      },
      providesTags: (result) => {
        if (result.sources) {
          return [
            ...result.sources.map(({ id }: ISource) => ({ type: 'Sources', id })),
            { type: 'Sources', id: 'LIST' }
          ]
        } else {
          return [{ type: 'Sources', id: 'LIST' }];
        }
      },
    }),
    getAllSources: build.query({
      query: () => ({
        method: 'GET',
        url: '/sources/all',
      }),
    }),
    addSource: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/sources',
        body
      }),
      invalidatesTags: [{ type: 'Sources', id: 'LIST' }]
    }),
    deleteSource: build.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `/sources/${id}`,
      }),
      invalidatesTags: [{ type: 'Sources', id: 'LIST' }]
    }),
  })
});

export const {
  useGetSourcesQuery,
  useGetAllSourcesQuery,
  useAddSourceMutation,
  useDeleteSourceMutation,
} = sourceApi;
