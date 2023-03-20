import {configureStore} from "@reduxjs/toolkit";
import mainDisplayReducer from './mainDisplaySlice';
import welcomeMainReducer from './welcomeMainSlice';

export default configureStore({
    reducer: {
        welcomeMainR: welcomeMainReducer,
        mainDisplay: mainDisplayReducer
    }
});