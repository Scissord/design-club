import { IAddCardForm } from '@interfaces';
import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReAuth from '@store/middleware/authMiddleware';

export const boardApi = createApi({
  reducerPath: 'boardApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Card', 'Board'],
  endpoints: (build) => ({
    getColumns: build.query({
      query: () => ({
        method: 'GET',
        url: '/board',
      }),
      providesTags: ['Board'],
    }),
    getCard: build.query({
      query: (id: string) => ({
        method: 'GET',
        url: `/board/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: 'Card', id }],
    }),
    createCard: build.mutation({
      query: ({ columnId, body }: { columnId: string; body: IAddCardForm }) => ({
        method: 'POST',
        url: `/board/${columnId}`,
        body
      }),
      invalidatesTags: ['Board']
    }),
    deleteCard: build.mutation({
      query: ({ cardId, columnId }: { cardId: string, columnId: string }) => ({
        method: 'DELETE',
        url: `/board/${cardId}`,
        body: {
          column_id: columnId
        }
      }),
      invalidatesTags: ['Board']
    }),
    moveCard: build.mutation({
      query: (body) => ({
        method: 'PATCH',
        url: `/board/${body.cardId}`,
        body
      }),
      invalidatesTags: (result, error, { cardId }) => [
        'Board',
        { type: 'Card', id: cardId }
      ],
    }),
  })
});

export const {
  useGetColumnsQuery,
  useGetCardQuery,
  useCreateCardMutation,
  useDeleteCardMutation,
  useMoveCardMutation
} = boardApi;
