import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeDisplay} from "../store/mainDisplaySlice";
import {PROFILE} from "../utils/constants";
import {changeState} from "../store/welcomeMainSlice";
import {logout} from "../firebase/auth-service";

const ProfileInfo = () => {
    const userInfo = useSelector(state => state.userInfo.user);

    const {display} = useSelector(state => state.mainDisplay);
    const dispatch = useDispatch();

    const handleOnClickLogout = () => {
        logout();
        sessionStorage.removeItem('uid');
        dispatch(changeDisplay(''))
        dispatch(changeState(true));
    }

    return (
        <div className={'profile-info'}>
            <img className={'author_avatar'} src={userInfo.avatar_url} alt={'Profile avatar'}/>
            <button disabled={display === PROFILE} onClick={() => dispatch(changeDisplay(PROFILE))}>{userInfo.name}
            </button>
            <button onClick={handleOnClickLogout}>Logout</button>
        </div>
    );
};

export default ProfileInfo;