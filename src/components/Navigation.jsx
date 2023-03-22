import React from 'react';
import {FAVORITES, FOUND, HOME, LOST} from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {changeDisplay} from "../store/mainDisplaySlice";
import ProfileInfo from "./ProfileInfo";
import ServicesButton from "./ServicesButton";

const Navigation = () => {
    const {display} = useSelector(state => state.mainDisplay);
    const dispatch = useDispatch();

    return (
        <div className={'navigation'}>
            <button disabled={display === HOME} onClick={() => dispatch(changeDisplay(HOME))}>Home</button>
            <button disabled={display === LOST} onClick={() => dispatch(changeDisplay(LOST))}>Lost</button>
            <button disabled={display === FOUND} onClick={() => dispatch(changeDisplay(FOUND))}>Found</button>
            {/*<button disabled={display === SERVICES} onClick={() => dispatch(changeDisplay(SERVICES))}>Services</button>*/}
            <ServicesButton/>
            <button disabled={display === FAVORITES} onClick={() => dispatch(changeDisplay(FAVORITES))}>Favorites</button>
            <ProfileInfo/>
        </div>
    );
};

export default Navigation;