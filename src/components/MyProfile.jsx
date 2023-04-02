import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
//import {changeDisplay} from "../store/mainDisplaySlice";
import {Link, /*useNavigate*/} from "react-router-dom";
import {fetchNewAvatar, fetchUpdatedUser} from "../store/userInfoSlice";
import {/*HOME,*/ home_page} from "../utils/constants";

const MyProfile = () => {
    const userInfo = useSelector(state => state.userInfo.user);

    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [tel_number, setTel_number] = useState(userInfo.tel_number);
    const [fb_link, setFb_link] = useState(userInfo.fb_link);

    const [changeName, setChangeName] = useState(false);

    const [proceed, setProceed] = useState(true);

    const dispatch = useDispatch();

    //const navigate = useNavigate();

    const handleOnChangeNewAvatar = async (event) => {
        const temp = event.target.files[0];
        dispatch(fetchNewAvatar(temp));
    };

    const handleOnClickSaveChanges = async () => {
        setProceed(true);
        const temp = {name, email, tel_number, fb_link, avatar_url: userInfo.avatar_url};
        if (compareObjects(userInfo, temp)) {
            setProceed(false);
            console.log('return from compare')
            return;
        }
        dispatch(fetchUpdatedUser(temp));
        //dispatch(changeDisplay(HOME));
        //navigate(home_page);
    }

    const compareObjects = (obj1, obj2) => {
        for (let field in obj1) {
            if (obj1[field] !== obj2[field])
                return false;
        }
        return true;
    };

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
                <input value={tel_number} onChange={(e) => setTel_number(e.target.value)} type={'tel'}
                       placeholder={'000-000-00-00'}/>
                <input value={fb_link} onChange={(e) => setFb_link(e.target.value)} type={'text'}
                       placeholder={'https://facebook.com/anna.smith908430'}/>
                <Link to={home_page}>
                    <button /*onClick={() => dispatch(changeDisplay(HOME))}*/>Cancel</button>
                    <button onClick={handleOnClickSaveChanges}>Save changes</button>
                </Link>
                {proceed || <p>Input something new!</p>}
            </div>
        </div>
    );
};

export default MyProfile;