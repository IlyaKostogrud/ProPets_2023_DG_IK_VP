import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getInfo} from "../firebase/propets-service";

const initialState = {
    user: {},
    status: 'idle',
    error: null
}

export const fetchUser = createAsyncThunk('userInfo/fetchUser',
    async function(_,{rejectWithValue,dispatch}){
        try {
            const response = await getInfo('users',sessionStorage.getItem('uid'));
            dispatch(addUser(response));
        }catch (error) {
            console.log(error);
            rejectWithValue(error.message)
        }
    }
)

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        addUser(state, action) {
            state.status = 'resolved';
            state.user = {...action.payload}
        }
    },
    extraReducers:{
        [fetchUser.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUser.rejected]: (state, action) =>{
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

export const {addUser} = userInfoSlice.actions;
export default userInfoSlice.reducer;