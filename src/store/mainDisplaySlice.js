import {createSlice} from "@reduxjs/toolkit";

export const mainDisplaySlice = createSlice({
    name: 'mainDisplay',
    initialState:{
        display: ''
    },
    reducers: {
        changeDisplay(state, action) {
            state.display = action.payload;
        }
    }
});

export const {changeDisplay} = mainDisplaySlice.actions;
export default mainDisplaySlice.reducer;