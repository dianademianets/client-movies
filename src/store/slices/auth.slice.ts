import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {authService} from '../../services';
import {IUser, IUserData, IUserResponse} from '../../interfaces';

interface IAuthState {
    requestToken: any;
    session_id: any;
    user: IUser | null;
    userResponse: IUserResponse | null;
    status: string | null;
}

const initialState: IAuthState = {
    requestToken: null,
    session_id: null,
    user: null,
    userResponse: null,
    status: null
};

export const getToken = createAsyncThunk<IUserData, void>(
    'authSlice/getToken',
    async (_) => {
        const {data} = await authService.getToken();
        return data
    }
)
export const login = createAsyncThunk<IUserResponse, { username: string, password: string, requestToken: string }>(
    'authSlice/login',
    async ({username, password, requestToken}) => {
        const {data} = await authService.login(username, password, requestToken);
        return data
    }
)
export const createSessionId = createAsyncThunk<IUser, string>(
    'authSlice/createSessionId',
    async (requestToken) => {
        const {data} = await authService.createSessionId(requestToken);
        return data
    }
)
export const getAccountDetails = createAsyncThunk<IUser, string>(
    'authSlice/getAccountDetails',
    async (session_id) => {
        const {data} = await authService.getAccountDetails(session_id);
        return data
    }
)


const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getToken.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.requestToken = action.payload.request_token;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.userResponse = action.payload;
        });
        builder.addCase(createSessionId.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.session_id = action.payload.session_id;
        });
        builder.addCase(getAccountDetails.pending, (state, action) => {
            state.status = 'Loading';
        });
        builder.addCase(getAccountDetails.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.user = action.payload;
        })
    }
})

const authReducer = authSlice.reducer;

export {authReducer};
