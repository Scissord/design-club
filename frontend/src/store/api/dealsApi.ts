// import { createApi } from '@reduxjs/toolkit/query/react';
// import { IDeal, IDeals } from '@interfaces';
// import baseQueryWithReAuth from '@store/middleware/authMiddleware';

// export type IMoveCardIndexResponse = {
//   columns: IDeals[];
// };

// export const dealsApi = createApi({
//   reducerPath: 'dealsApi',
//   baseQuery: baseQueryWithReAuth,
//   tagTypes: ['Deals'],
//   endpoints: (build) => ({
//     getDeals: build.query({
//       query: () => ({
//         method: 'GET',
//         url: '/deals',
//       }),
//       providesTags: (result) => result
//         ? [
//           ...result.map(({ id }: { id: string }) => ({ type: 'Deals', id })),
//           { type: 'Deals', id: 'LIST' }
//         ]
//         : [{ type: 'Deals', id: 'LIST' }],
//     }),
//     createCard: build.mutation({
//       query: (body) => ({
//         method: 'POST',
//         url: `/deals`,
//         body
//       }),
//       invalidatesTags: [{ type: 'Deals', id: 'LIST' }]
//     }),
//     moveCardIndex: build.mutation<IMoveCardIndexResponse, {
//       index: number,
//       deal: IDeal,
//       status: number
//     }>({
//       query: ({ index, deal, status }) => ({
//         method: 'PATCH',
//         url: `/deals/${deal.id}/move`,
//         body: {
//           index,
//           deal,
//           status
//         }
//       }),
//       // invalidatesTags: [{ type: 'Deals', id: 'LIST' }]
//     }),
//   })
// });

// export const { useGetDealsQuery, useMoveCardIndexMutation, useCreateCardMutation } = dealsApi;
