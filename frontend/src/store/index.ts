import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import themeReducer from './reducers/themeSlice';
import sidebarReducer from './reducers/sidebarSlice';
import { authApi } from './api/authApi';
import { productsApi } from './api/productsApi';
// import { dealsApi } from './api/dealsApi';
import { columnsApi } from './api/columnsApi';

const rootReducer = combineReducers({
  // redux
  auth: authReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  // rtk-query endpoints
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  // [dealsApi.reducerPath]: dealsApi.reducer,
  [columnsApi.reducerPath]: columnsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(
        productsApi.middleware,
        // dealsApi.middleware,
        columnsApi.middleware,
      ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
