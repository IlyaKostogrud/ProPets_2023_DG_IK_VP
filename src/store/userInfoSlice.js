import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    addUserToDB,
    getAvatarURL,
    getDefaultAvatarURL,
    getInfo,
    removeAvatar, updateField,
    uploadImage
} from "../firebase/propets-service";

const uid = sessionStorage.getItem('uid');

const initialState = {
    user: {},
    status: 'idle',
    error: null
};

export const fetchUser = createAsyncThunk('userInfo/fetchUser',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const response = await getInfo('users', uid);
            dispatch(addUser(response));
        } catch (error) {
            console.log(error);
            rejectWithValue(error.message)
        }
    }
);

export const fetchUpdatedUser = createAsyncThunk('userInfo/fetchUpdatedUser',
    async (userData, {rejectWithValue, dispatch}) => {
        try {
            await addUserToDB(userData);
            const response = await getInfo('users', uid);
            dispatch(addUser(response));
        } catch (error) {
            console.log(error);
            rejectWithValue(error.message)
        }
    });

export const fetchNewAvatar = createAsyncThunk('userInfo/fetchNewAvatar',
    async (picture, {rejectWithValue, dispatch, getState}) => {
        try {
            const temp = getState().userInfo.user.avatar_url;
            const compare_with = await getDefaultAvatarURL();
            if (temp !== compare_with) {
                await removeAvatar(uid);
            }
            await uploadImage(picture, uid, 'avatar');
            const response = await getAvatarURL(uid);
            await updateField(response, 'users', uid, 'avatar_url');
            dispatch(updateUserAvatar(response));
        } catch (error) {
            console.log(error);
            rejectWithValue(error.message);
        }
    });

const setLoading = (state) => {
    state.status = 'loading';
    state.error = null;
};

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
        updateUserAvatar(state, action) {
            state.status = 'resolved';
            state.user.avatar_url = action.payload;
        },
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

export const {addUser, updateUserAvatar} = userInfoSlice.actions;
export default userInfoSlice.reducer;