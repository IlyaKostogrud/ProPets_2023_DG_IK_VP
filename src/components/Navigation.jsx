import React from 'react';
import {
    FAVORITES,
    favourites_page,
    FOUND,
    found_feed_page,
    HOME,
    home_page,
    LOST,
    lost_feed_page
} from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {changeDisplay} from "../store/mainDisplaySlice";
import ProfileInfo from "./ProfileInfo";
import ServicesButton from "./ServicesButton";
import {Link} from "react-router-dom";

const Navigation = () => {
    const {display} = useSelector(state => state.mainDisplay);
    const dispatch = useDispatch();

    return (
        <div className={'navigation'}>
            <Link to={home_page}>
                <button disabled={display === HOME} onClick={() => dispatch(changeDisplay(HOME))}>Home</button>
            </Link>
            <Link to={lost_feed_page}>
                <button disabled={display === LOST} onClick={() => dispatch(changeDisplay(LOST))}>Lost</button>
            </Link>
            <Link to={found_feed_page}>
                <button disabled={display === FOUND} onClick={() => dispatch(changeDisplay(FOUND))}>Found</button>
            </Link>
            <ServicesButton/>
            <Link to={favourites_page}>
                <button disabled={display === FAVORITES} onClick={() => dispatch(changeDisplay(FAVORITES))}>Favorites</button>
            </Link>
            <ProfileInfo/>
        </div>
    );
};

export default Navigation;