import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
}

export const slice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = action.payload;
        },
        logout: (state, action) => {
            state.isAuth= action.payload;
        }
    }
})

export const { login, logout } = slice.actions;
export default slice.reducer;