import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from './reducers/themeSlice';
import counterReducer from './reducers/counterSlice';
import { authApi } from './api/authApi';
import { productsApi } from './api/productsApi';

const rootReducer = combineReducers({
	// redux
	theme: themeReducer,
	counter: counterReducer,
	// rtk-query endpoints
	[authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  // additional middlewares can be added here, e.g., thunk or other middleware for async actions
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
