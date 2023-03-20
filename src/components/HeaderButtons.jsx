import React from 'react';
import {ADD_NEW, FAVORITES, FOUND, HOME, LOST, LOST_FORM, SERVICES} from "../utils/constants";
import {changeDisplay} from "../store/mainDisplaySlice";
import {useDispatch, useSelector} from "react-redux";
import {changeState} from "../store/welcomeMainSlice";

const HeaderButtons = () => {
    const {display} = useSelector(state => state.mainDisplay);
    const dispatch = useDispatch();

    const handleClickSignIn = () => {
        dispatch(changeDisplay(HOME));
        dispatch(changeState(false));
    };

    switch (display) {
        case '':
            return (
                <button onClick={handleClickSignIn}>Sign In</button>
            );
        case HOME:
        case SERVICES:
        case FAVORITES:
            return (
                <button onClick={() => dispatch(changeDisplay(ADD_NEW))}>+ Add new</button>
            );
        case LOST:
        case FOUND:
            return (
                <>
                    <button onClick={() => dispatch(changeDisplay(LOST_FORM))}>I lost my pet</button>
                    <button>I found a pet</button>
                </>
            );
        default:
            return;
    }
};

export default HeaderButtons;