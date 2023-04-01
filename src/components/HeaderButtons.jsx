import React from 'react';
import {
    ADD_NEW,
    add_new_page,
    FAVORITES,
    FOSTERING,
    FOUND,
    FOUND_FORM,
    found_form_page,
    HOME,
    HOTELS,
    LOST,
    LOST_FORM,
    lost_form_page,
    SERVICES,
    sign_in_page,
    VET_HELP,
    WALKING
} from "../utils/constants";
import {changeDisplay} from "../store/mainDisplaySlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const HeaderButtons = ({handleClickProceed}) => {
    const {display} = useSelector(state => state.mainDisplay);
    const dispatch = useDispatch();

    const handleClickSignIn = () => {
        handleClickProceed(true);
    };

    switch (display) {
        case '':
            return (
                <Link to={sign_in_page}>
                    <button onClick={handleClickSignIn}>Sign In</button>
                </Link>
            );
        case HOME:
        case SERVICES:
        case FAVORITES:
        case HOTELS:
        case WALKING:
        case FOSTERING:
        case VET_HELP:
            return (
                <Link to={add_new_page}>
                    <button onClick={() => dispatch(changeDisplay(ADD_NEW))}>+ Add new</button>
                </Link>
            );
        case LOST:
        case FOUND:
            return (
                <div>
                    <Link to={lost_form_page}>
                        <button onClick={() => dispatch(changeDisplay(LOST_FORM))}>I lost my pet</button>
                    </Link>
                    <Link to={found_form_page}>
                        <button onClick={() => dispatch(changeDisplay(FOUND_FORM))}>I found a pet</button>
                    </Link>
                </div>
            );
        default:
            return;
    }
};

export default HeaderButtons;