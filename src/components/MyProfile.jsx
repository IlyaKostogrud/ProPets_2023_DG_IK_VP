import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeDisplay} from "../store/mainDisplaySlice";
import {HOME} from "../utils/constants";

const MyProfile = () => {
    const userInfo = useSelector(state => state.userInfo.user);

    // const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [phone, setPhone] = useState(userInfo.tel_number);
    const [fbLink,setFbLink] = useState(userInfo.fb_link);

    const dispatch = useDispatch();

    return (
        <div className={'my-profile'}>
            <img src={userInfo.avatar_url} alt={'Profile avatar'}/>
            <p>{userInfo.name}</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type={'email'} placeholder={'helenjohnson@gmail.com'}/>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type={'tel'} placeholder={'000-000-00-00'}/>
            <input value={fbLink} onChange={(e) => setFbLink(e.target.value)} type={'text'} placeholder={'https://facebook.com/anna.smith908430'}/>
            <button onClick={() => dispatch(changeDisplay(HOME))}>Cancel</button>
            <button onClick={() => dispatch(changeDisplay(HOME))}>Save changes</button>
        </div>
    );
};

export default MyProfile;