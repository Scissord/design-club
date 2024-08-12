import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReAuth from '@store/middleware/authMiddleware';

export const columnsApi = createApi({
  reducerPath: 'columnsApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: (build) => ({
    getColumns: build.query({
      query: () => ({
        method: 'GET',
        url: '/columns',
      }),
    }),
    createCard: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: `/columns`,
        body
      }),
    }),
    moveCard: build.mutation({
      query: (body) => ({
        method: 'PATCH',
        url: `/columns/${body.cardId}`,
        body
      }),
    }),
  })
});

export const { useGetColumnsQuery, useCreateCardMutation, useMoveCardMutation } = columnsApi;
