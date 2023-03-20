import {createSlice} from "@reduxjs/toolkit";

export const welcomeMainSlice = createSlice({
    name: 'welcomeMainR',
    initialState:{
        welcomeState: true
    },
    reducers:{
        changeState(state,action){
            state.welcomeState = action.payload;
        }
    }
});

export const {changeState} = welcomeMainSlice.actions;
export default welcomeMainSlice.reducer;