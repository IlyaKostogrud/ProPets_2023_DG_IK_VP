import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addUserToDB, getDefaultAvatarURL, getInfo} from "../firebase/propets-service";

const initialState = {
    user: {},
    status: 'idle',
    error: null
};

export const fetchUser = createAsyncThunk('userInfo/fetchUser',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const uid = sessionStorage.getItem('uid');
            const response = await getInfo('users', uid);
            dispatch(addUser(response));
        } catch (error) {
            console.log(error);
            rejectWithValue(error.message)
        }
    }
);

// ВСПОМНИ, ЧТО ПРИДУМАЛ НОЧЬЮ И ПЕРЕДЕЛАЙ ВСЁ ПОД ПАРАЛЛЕЛЬНОЕ ИЗМЕНЕНИЕ ПОЛЕЙ В РЕДАКСЕ И ПОЛЕЙ В ФАЙРБЕЙЗ

export const fetchUpdatedUser = createAsyncThunk('userInfo/fetchUpdatedUser',
    async (userData, {rejectWithValue, dispatch}) => {
        try {
            const response = await addUserToDB({...userData})
            dispatch(addUser(response));
        } catch (error) {
            console.log(error);
            rejectWithValue(error.message)
        }
    });

// export const fetchNewAvatar = createAsyncThunk('userInfo/fetchNewAvatar',
//     async (picture, {rejectWithValue, dispatch, getState}) => {
//         try {
//             const uid = sessionStorage.getItem('uid');
//             const compare_with = await getDefaultAvatarURL();
//             getState().
//             if(g)
//         } catch (error) {
//             console.log(error);
//             rejectWithValue(error.message);
//         }
//     });

const setLoading = (state) => {
    state.status = 'loading';
    state.error = null;
}

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
};

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        addUser(state, action) {
            state.status = 'resolved';
            state.user = {...action.payload}
        },
        updateUserAvatar(state,action){
            state.status = 'resolved';
            state.user.avatar_url = action.payload;
        }
    },
    // extraReducers: {
    //     [fetchUser.pending]: (state) => {
    //         state.status = 'loading';
    //         state.error = null;
    //     },
    //     [fetchUpdatedUser.pending]: (state) => {
    //         state.status = 'loading';
    //         state.error = null;
    //     },
    //     [fetchUser.rejected]: setError,
    //     [fetchUpdatedUser.rejected]: setError
    // }
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, setLoading);
        builder.addCase(fetchUpdatedUser.pending, setLoading);
        builder.addCase(fetchUser.rejected, setError);
        builder.addCase(fetchUpdatedUser.rejected, setError);
    }
});

export const {addUser} = userInfoSlice.actions;
export default userInfoSlice.reducer;