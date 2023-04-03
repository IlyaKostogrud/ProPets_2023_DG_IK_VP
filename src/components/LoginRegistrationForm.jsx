import React, {useState} from 'react';
import {changeDisplay} from "../store/mainDisplaySlice";
import {changeState} from "../store/welcomeMainSlice";
import {useDispatch, useSelector} from "react-redux";
import {getUid, loginFBase, registration} from "../firebase/auth-service";
import {addUserToDB, getDefaultAvatarURL} from "../firebase/propets-service";
import {home_page} from "../utils/constants";
import {Link} from "react-router-dom";

let error_message = '';
const LoginRegistrationForm = ({changeCondition, whatToRenderNext}) => {
    const {login} = useSelector(state => state.renderLoginR);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        loading: false,
        failure: false
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const handleClickSubmit = async () => {
        setState({loading: true, failure: false});
        const response = login ? await loginFBase(email, password) :
            await registration_init(name, email, password, passwordCheck);

        if (state.failure || isResponseWithError(response)) return;

        const uid = await getUid();
        sessionStorage.setItem('uid', uid);
        dispatch(changeDisplay(whatToRenderNext));
        dispatch(changeState(false));
    };

    const isResponseWithError = (response) => {
        if (response === undefined || response.hasOwnProperty('message')) {
            setState({
                loading: false,
                failure: true
            });
            error_message = login ? response.message : 'Registration issues';
            return true;
        }
        return false;
    }

    const registration_init = async (name, email, password) => {
        const temp = checkPassword(password);
        if (!temp) {
            const response = await registration(email, password);
            if (isResponseWithError(response)) return;
            const avatar_url = await getDefaultAvatarURL();
            const temp = {name, email, tel_number: '000-000-00-00', fb_link: '', avatar_url};
            await addUserToDB(temp);
            return response;
        }
        setState({loading: false, failure: true});
        error_message = temp;
    }

    const checkPassword = () => {
        switch (true) {
            case !name:
                return 'Fill your name';
            case !email:
                return 'Fill your email';
            case password.length < 8:
                return 'Your password must be at least 8 symbols length';
            case password !== passwordCheck:
                return 'Passwords don\'t match';
            default:
                return '';
        }
    };

    return (
        <div>
            <form className={'loginRegistrationForm-fields'}>
                {login || <div>
                    <label htmlFor="login-name">Name: </label>
                    <input disabled={state.loading} type={'text'} id="login-name" placeholder={'Helen Johnson'}
                           value={name} onChange={e => setName(e.target.value)}/>
                </div>}
                <div>
                    <label htmlFor="login-email">Email: </label>
                    <input disabled={state.loading} type={'email'} id="login-email"
                           placeholder={'helenjohnson@gmail.com'}
                           value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="login-password">Password: </label>
                    <input disabled={state.loading} type={'password'} id="login-password" placeholder={'********'}
                           value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                {login || <div>
                    <label htmlFor="login-password-check">Password: </label>
                    <input disabled={state.loading} type={'password'} id="login-password-check" placeholder={'********'}
                           value={passwordCheck} onChange={e => setPasswordCheck(e.target.value)}/>
                </div>}
                {state.failure && <div>
                    <p className={'error-p'}>{`${error_message}`}</p>
                </div>}
            </form>
            <div className={'login-registration-buttons'}>
                <button disabled={state.loading} onClick={() => changeCondition()}>Cancel</button>
                <Link to={home_page}>
                    <button disabled={state.loading} onClick={handleClickSubmit}>Submit</button>
                </Link>
            </div>
        </div>
    );
};

export default LoginRegistrationForm;