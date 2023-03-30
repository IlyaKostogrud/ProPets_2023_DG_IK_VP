import React from 'react';
import {
    ADD_NEW,
    FAVORITES,
    FOSTERING,
    FOUND,
    FOUND_FORM,
    HOME,
    HOTELS,
    LOST,
    LOST_FORM,
    SERVICES, VET_HELP,
    WALKING
} from "../utils/constants";
import {changeDisplay} from "../store/mainDisplaySlice";
import {useDispatch, useSelector} from "react-redux";

const HeaderButtons = ({handleClickProceed}) => {
    const {display} = useSelector(state => state.mainDisplay);
    const dispatch = useDispatch();

    const handleClickSignIn = () => {
        handleClickProceed(true);
    };

    switch (display) {
        case '':
            return (
                <button onClick={handleClickSignIn}>Sign In</button>
            );
        case HOME:
        case SERVICES:
        case FAVORITES:
        case HOTELS:
        case WALKING:
        case FOSTERING:
        case VET_HELP:
            return (
                <button onClick={() => dispatch(changeDisplay(ADD_NEW))}>+ Add new</button>
            );
        case LOST:
        case FOUND:
            return (
                <div>
                    <button onClick={() => dispatch(changeDisplay(LOST_FORM))}>I lost my pet</button>
                    <button onClick={() => dispatch(changeDisplay(FOUND_FORM))}>I found a pet</button>
                </div>
            );
        default:
            return;
    }
};

export default HeaderButtons;