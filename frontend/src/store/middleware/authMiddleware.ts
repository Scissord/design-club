import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAccessToken, localLogout } from '../reducers/authSlice';
import { RootState } from '../index';

interface ErrorData {
  accessToken?: string;
};

interface ApiError {
  status: number;
  data: ErrorData;
};

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const accessToken = state.auth.accessToken;

    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }

    return headers;
  }
});

const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && (result.error as ApiError).status === 401) {
    const newToken = (result.error as ApiError)?.data?.accessToken;

    if (newToken) {
      api.dispatch(setAccessToken(newToken));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(localLogout());
    }
  }

  return result;
};

export default baseQueryWithReAuth;
