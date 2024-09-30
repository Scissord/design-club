import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import themeReducer from './reducers/themeSlice';
import sidebarReducer from './reducers/sidebarSlice';
import { authApi } from './api/authApi';
import { productApi } from './api/productApi';
import { sourceApi } from './api/sourceApi';
import { clientApi } from './api/clientApi';

const rootReducer = combineReducers({
  // redux
  auth: authReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  // rtk-query endpoints
  [authApi.reducerPath]: authApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [sourceApi.reducerPath]: sourceApi.reducer,
  [clientApi.reducerPath]: clientApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(
        productApi.middleware,
        sourceApi.middleware,
        clientApi.middleware,
      ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
