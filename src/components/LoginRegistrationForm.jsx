import React, {useState} from 'react';
import {changeDisplay} from "../store/mainDisplaySlice";
import {changeState} from "../store/welcomeMainSlice";
import {useDispatch, useSelector} from "react-redux";
import {loginFBase, registration} from "../firebase/auth-service";

const LoginRegistrationForm = ({changeCondition, whatToRenderNext}) => {
    const {login} = useSelector(state => state.renderLoginR);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const handleClickSubmit = async() => {
        setError('');
        let response = login ? await loginFBase(email, password) : await registration(email, password);
        if (response.hasOwnProperty('message')){
            setError(response.message);
            return;
        }
        dispatch(changeDisplay(whatToRenderNext));
        dispatch(changeState(false));
    };

    return (
        <div>
            <form className={'loginRegistrationForm-fields'}>
                {login || <div>
                    <label htmlFor="login-name">Name:</label>
                    <input type={'text'} id="login-name" placeholder={'Helen Johnson'}/>
                </div>}
                <div>
                    <label htmlFor="login-email">Email:</label>
                    <input type={'email'} id="login-email" placeholder={'helenjohnson@gmail.com'}
                           value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="login-password">Password:</label>
                    <input type={'password'} id="login-password" placeholder={'********'}
                           value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                {login || <div>
                    <label htmlFor="login-password-check">Password:</label>
                    <input type={'password'} id="login-password-check" placeholder={'********'}/>
                </div>}
                {error && <div>
                    <p className={'error-p'}>{`${error}`}</p>
                </div>}
            </form>
            <button onClick={() => changeCondition()}>Cancel</button>
            <button onClick={handleClickSubmit}>Submit</button>
        </div>
    );
};

export default LoginRegistrationForm;