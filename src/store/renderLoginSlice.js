import {createSlice} from "@reduxjs/toolkit";

export const renderLoginSlice = createSlice({
    name: 'loginOrRegistrationR',
    initialState:{
        login: false
    },
    reducers: {
        renderLogin(state, action) {
            state.login = action.payload;
        }
    }
});

export const {renderLogin} = renderLoginSlice.actions;
export default renderLoginSlice.reducer;