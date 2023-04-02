import React from 'react';
import {useDispatch, useSelector} from "react-redux";
//import {changeDisplay} from "../store/mainDisplaySlice";
import {base_url,/* PROFILE,*/ profile_page} from "../utils/constants";
import {changeState} from "../store/welcomeMainSlice";
import {logout} from "../firebase/auth-service";
import {Link, useLocation} from "react-router-dom";

const ProfileInfo = () => {
    const userInfo = useSelector(state => state.userInfo.user);
    //const {display} = useSelector(state => state.mainDisplay);
    const location = useLocation().pathname
    const dispatch = useDispatch();

    const handleOnClickLogout = () => {
        logout();
        sessionStorage.removeItem('uid');
        //dispatch(changeDisplay(''));
        dispatch(changeState(true));
    }

    return (
        <div className={'profile-info'}>
            <img className={'author_avatar'} src={userInfo.avatar_url} alt={'Profile avatar'}/>
            <Link to={profile_page}>
                <button disabled={location === profile_page} /*onClick={() => dispatch(changeDisplay(PROFILE))}*/>
                    {userInfo.name}
                </button>
            </Link>
            <Link to={base_url}>
                <button onClick={handleOnClickLogout}>Logout</button>
            </Link>
        </div>
    );
};

export default ProfileInfo;