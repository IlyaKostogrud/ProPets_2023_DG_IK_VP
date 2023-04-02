import React from 'react';
import {
    //ADD_NEW,
    add_new_page,
    base_url,
    //FAVORITES,
    favourites_page,
    //FOSTERING,
    fostering_page,
    //FOUND,
    found_feed_page,
    //FOUND_FORM,
    found_form_page,
    home_page,
    hotels_page,
    lost_feed_page,
    lost_form_page,
    preview_page,
    profile_page,
    //sign_in_page,
    vet_help_page,
    walking_page
} from "../utils/constants";
import {changeDisplay} from "../store/mainDisplaySlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, Routes} from "react-router-dom";
import HomeServices from "./HomeServices";
import LostFeed from "./LostFeed";

const HeaderButtons = ({handleClickProceed}) => {
    const {display} = useSelector(state => state.mainDisplay);
    const dispatch = useDispatch();

    const handleClickSignIn = () => {
        handleClickProceed(true);
    };
    return(
        <Routes>//localhost:3000
            <Route path={base_url} element={
                <Link to={home_page}>
                    <button onClick={handleClickSignIn}>Sign In</button>
                </Link>
            }/>
            {[add_new_page,lost_form_page,found_form_page,preview_page,profile_page].map(path=><Route path={path} key={path} element={null}/>)}
            {[home_page, hotels_page,walking_page,fostering_page,vet_help_page,favourites_page].map(path=>
            <Route path={path} key={path} element={
                <Link to={add_new_page}>
                    <button /*onClick={() => dispatch(changeDisplay(ADD_NEW))}*/>+ Add new</button>
                </Link>
            }/>)}
            <Route path={lost_feed_page} element={
                <div>
                    <Link to={lost_form_page}>
                        <button /*onClick={() => dispatch(changeDisplay(LOST_FORM))}*/>I lost my pet</button>
                    </Link>
                    <Link to={found_form_page}>
                        <button /*onClick={() => dispatch(changeDisplay(FOUND_FORM))}*/>I found a pet</button>
                    </Link>
                </div>
            }/>
            <Route path={found_feed_page} element={
                <div>
                    <Link to={lost_form_page}>
                        <button /*onClick={() => dispatch(changeDisplay(LOST_FORM))}*/>I lost my pet</button>
                    </Link>
                    <Link to={found_form_page}>
                        <button /*onClick={() => dispatch(changeDisplay(FOUND_FORM))}*/>I found a pet</button>
                    </Link>
                </div>
            }/>
        </Routes>
    )
    /*switch (display) {
        case '':
            return (
                <Link to={home_page}>
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
    }*/
};

export default HeaderButtons;