import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeDisplay} from "../store/mainDisplaySlice";
import {HOME, home_page} from "../utils/constants";
import {Link} from "react-router-dom";
import {fetchNewAvatar} from "../store/userInfoSlice";

const MyProfile = () => {
    const userInfo = useSelector(state => state.userInfo.user);

    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [phone, setPhone] = useState(userInfo.tel_number);
    const [fbLink, setFbLink] = useState(userInfo.fb_link);

    const [changeName, setChangeName] = useState(false);

    const dispatch = useDispatch();

    const handleOnChangeNewAvatar = async (event) => {
        // const temp = event.target.files[0];
        // dispatch(fetchNewAvatar(temp));
    }

    return (
        <div className={'my-profile'}>
            <img className={'author_avatar'} src={userInfo.avatar_url} alt={'Profile avatar'}/>
            <input className={'author_avatar_browse'} type={'file'} onChange={(e) => handleOnChangeNewAvatar(e)}/>
            {changeName ? <input value={name} onChange={(e) => setName(e.target.value)}></input> :
                <span>{userInfo.name}</span>}
            <button disabled={changeName} onClick={() => setChangeName(!changeName)}>Change name</button>
            <div>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type={'email'}
                       placeholder={'helenjohnson@gmail.com'}/>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type={'tel'}
                       placeholder={'000-000-00-00'}/>
                <input value={fbLink} onChange={(e) => setFbLink(e.target.value)} type={'text'}
                       placeholder={'https://facebook.com/anna.smith908430'}/>
                <Link to={home_page}>
                    <button onClick={() => dispatch(changeDisplay(HOME))}>Cancel</button>
                    <button onClick={() => dispatch(changeDisplay(HOME))}>Save changes</button>
                </Link>
            </div>
        </div>
    );
};

export default MyProfile;