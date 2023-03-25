import React from 'react';
import {changeDisplay} from "../store/mainDisplaySlice";
import {changeState} from "../store/welcomeMainSlice";
import {useDispatch, useSelector} from "react-redux";

const LoginRegistrationForm = ({changeCondition, whatToRenderNext}) => {
    const {login} = useSelector(state => state.renderLoginR);
    const dispatch = useDispatch();
    const handleClickSignIn = () => {
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
                    <input type={'email'} id="login-email" placeholder={'helenjohnson@gmail.com'}/>
                </div>
                <div>
                    <label htmlFor="login-password">Password:</label>
                    <input type={'password'} id="login-password" placeholder={'********'}/>
                </div>
                {login || <div>
                    <label htmlFor="login-password-check">Password:</label>
                    <input type={'password'} id="login-password-check" placeholder={'********'}/>
                </div>}
            </form>
            <button onClick={() => changeCondition()}>Cancel</button>
            <button onClick={handleClickSignIn}>Submit</button>
        </div>
    );
};

export default LoginRegistrationForm;