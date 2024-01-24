import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store.ts';

// Define a type for the slice state
export interface AccountState {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar?: {
        id: string;
        filename: string;
    };
    role: string;
    verified: string;
    created: string;
    jwtToken: string;
}

// Define the initial state using that type
const initialState: AccountState = {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    role: '',
    verified: '',
    created: '',
    jwtToken: ''
};

export const accountSlice = createSlice({
    name: 'account',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AccountState>) => ({ ...state, ...action.payload })
    }
});

export const selectAccount = (state: RootState) => state.account;

export const selectAvatar = (state: RootState) =>
    state.account.avatar?.filename
        ? `${import.meta.env.VITE_APP_BASE_API_URL}${import.meta.env.VITE_APP_ACCOUNT_AVATAR_PATH}/${
              state.account.id
          }/${state.account.avatar?.filename}`
        : undefined;

export const selectFullName = (state: RootState) => `${state.account.firstName} ${state.account.lastName}`;

export const { setUser } = accountSlice.actions;

export default accountSlice.reducer;
