import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeDisplay} from "../store/mainDisplaySlice";
import {PROFILE} from "../utils/constants";
import {changeState} from "../store/welcomeMainSlice";

const ProfileInfo = () => {
    const {display} = useSelector(state => state.mainDisplay);
    const dispatch = useDispatch();

    const handleOnClickLogout = () =>{
        dispatch(changeDisplay(''))
        dispatch(changeState(true));
    }

    return (
        <div className={'profile-info'}>
            <button disabled={display === PROFILE} onClick={() => dispatch(changeDisplay(PROFILE))}>Profile name</button>
            <button onClick={handleOnClickLogout}>Logout</button>
        </div>
    );
};

export default ProfileInfo;