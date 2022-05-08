import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";

const initialState = {
    isAuth: null,
    loginError: null,

    authStatus: null,
    authErrors: {}
};

const login = createAsyncThunk(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await authService.getTokens(user);
            return data;
        }
         catch (e) {
             return rejectWithValue({errorStatus: e.message, errorsFromForm: e.response.data});
         }
    }
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuth: state => {
            state.isAuth = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true;
                state.loginError = false;
                const {access, refresh} = action.payload;
                localStorage.setItem('access', access);
                localStorage.setItem('refresh', refresh);
            })
            .addCase(login.rejected, (state, action) => {
                console.log('************');


                state.loginError = true;

                const {errorStatus, errorsFromForm} = action.payload;
                state.authStatus = errorStatus;
                state.authErrors = errorsFromForm;
            })
    }
});

const {reducer: authReducer, actions: {setAuth}} = authSlice;

const authActions = {
    login,
    setAuth,
}

export {
    authReducer,
    authActions
}