import {configureStore} from "@reduxjs/toolkit";
import mainDisplayReducer from './mainDisplaySlice';
import welcomeMainReducer from './welcomeMainSlice';
import renderLoginReducer from './renderLoginSlice';

export default configureStore({
    reducer: {
        welcomeMainR: welcomeMainReducer,
        renderLoginR: renderLoginReducer,
        mainDisplay: mainDisplayReducer
    }
});