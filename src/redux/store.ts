import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import accountReducer from './features/account/accountSlice.ts';
import { apiSlice } from './features/api/apiSlice.ts';

export const store = configureStore({
    reducer: {
        account: accountReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
