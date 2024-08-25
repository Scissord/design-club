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
    moveCard: build.mutation({
      query: (body) => ({
        method: 'PATCH',
        url: `/cards/${body.cardId}/move`,
        body
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(boardApi.util.invalidateTags(['Board', 'Card']));
        } catch (error) {
          console.error('Error in moveCard mutation:', error);
        }
      },
    }),
    getCard: build.query({
      query: (id: string) => ({
        method: 'GET',
        url: `/cards/${id}`,
      }),
      providesTags: ['Card'],
    }),
    createCard: build.mutation({
      query: ({ columnId, body }: { columnId: string; body: IAddCardForm }) => ({
        method: 'POST',
        url: `/cards/${columnId}`,
        body
      }),
      invalidatesTags: ['Board']
    }),
    deleteCard: build.mutation({
      query: ({ cardId, columnId }: { cardId: string, columnId: string }) => ({
        method: 'DELETE',
        url: `/cards/${cardId}`,
        body: {
          column_id: columnId
        }
      }),
      invalidatesTags: ['Board']
    }),
    updateCardItem: build.mutation({
      query: ({ id, body }: { id: number, body: { progress: number } }) => ({
        method: 'PATCH',
        url: `/cardItems/${id}`,
        body
      }),
      invalidatesTags: ['Card'],
    }),
  })
});

export const {
  useGetColumnsQuery,
  useGetCardQuery,
  useCreateCardMutation,
  useDeleteCardMutation,
  useMoveCardMutation,
  useUpdateCardItemMutation
} = boardApi;
