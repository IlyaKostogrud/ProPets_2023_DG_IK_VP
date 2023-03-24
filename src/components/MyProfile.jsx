import React from 'react';
import {useDispatch} from "react-redux";
import {changeDisplay} from "../store/mainDisplaySlice";
import {HOME} from "../utils/constants";

const MyProfile = () => {
    const dispatch = useDispatch();

    return (
        <div className={'my-profile'}>
            Profile picture Profile name
            <input type={'email'} placeholder={'helenjohnson@gmail.com'}/>
            <input type={'tel'} placeholder={'000-000-00-00'}/>
            <input type={'text'} placeholder={'https://facebook.com/anna.smith908430'}/>
            <button onClick={() => dispatch(changeDisplay(HOME))}>Cancel</button>
            <button onClick={() => dispatch(changeDisplay(HOME))}>Save changes</button>
        </div>
    );
};

export default MyProfile;