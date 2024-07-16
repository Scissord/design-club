import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
	tagTypes: ['Users'],
	endpoints: (build) => ({
		login: build.mutation({
			query: (body) => ({
				method: 'POST',
				url: '/login',
				body
			}),
			// invalidatesTags: [{ type: 'Products', id: 'LIST' }]
		}),
	})
});

export const { useLoginMutation } = authApi;