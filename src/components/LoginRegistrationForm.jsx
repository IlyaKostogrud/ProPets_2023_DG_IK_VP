import React, {useState} from 'react';
import {changeDisplay} from "../store/mainDisplaySlice";
import {changeState} from "../store/welcomeMainSlice";
import {useDispatch, useSelector} from "react-redux";
import {getUid, loginFBase, registration} from "../firebase/auth-service";
import {addUserToDB} from "../firebase/propets-service";

const LoginRegistrationForm = ({changeCondition, whatToRenderNext}) => {
    const {login} = useSelector(state => state.renderLoginR);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleClickSubmit = async () => {
        setLoading(true);
        setError('');
        const response = login ? await loginFBase(email, password) :
            await registration_init(name, email, password, passwordCheck);

        if (isResponseWithError(response)) return;

        sessionStorage.setItem('uid', await getUid());
        dispatch(changeDisplay(whatToRenderNext));
        dispatch(changeState(false));
    };

    const isResponseWithError = (response) => {
        if (response === undefined || response.hasOwnProperty('message')) {
            setLoading(false);
            login ? setError(response.message) : setError('Registration issues');
            return true;
        }
        return false;
    }

    const registration_init = async (name, email, password, passwordCheck) => {
        //************************************NEED MORE CHECKS OF CONDITIONS************************************
        if (password === passwordCheck) {
            const response = await registration(email, password);
            if (isResponseWithError(response)) return;
            await addUserToDB(name, email);
            return response;
        }
        setError('Passwords don\'t match');
    }

    return (
        <div>
            <form className={'loginRegistrationForm-fields'}>
                {login || <div>
                    <label htmlFor="login-name">Name: </label>
                    <input disabled={loading} type={'text'} id="login-name" placeholder={'Helen Johnson'}
                           value={name} onChange={e => setName(e.target.value)}/>
                </div>}
                <div>
                    <label htmlFor="login-email">Email: </label>
                    <input disabled={loading} type={'email'} id="login-email" placeholder={'helenjohnson@gmail.com'}
                           value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="login-password">Password: </label>
                    <input disabled={loading} type={'password'} id="login-password" placeholder={'********'}
                           value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                {login || <div>
                    <label htmlFor="login-password-check">Password: </label>
                    <input disabled={loading} type={'password'} id="login-password-check" placeholder={'********'}
                           value={passwordCheck} onChange={e => setPasswordCheck(e.target.value)}/>
                </div>}
                {error && <div>
                    <p className={'error-p'}>{`${error}`}</p>
                </div>}
            </form>
            <div className={'login-registration-buttons'}>
                <button disabled={loading} onClick={() => changeCondition()}>Cancel</button>
                <button disabled={loading} onClick={handleClickSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default LoginRegistrationForm;