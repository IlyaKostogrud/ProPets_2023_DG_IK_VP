import React from 'react';
import LoginRegistrationForm from "../LoginRegistrationForm";
import {useDispatch, useSelector} from "react-redux";
import {renderLogin} from "../../store/renderLoginSlice";
import "./loginRegistrationStep.css";

const LoginRegistrationStep = (props) => {
    const {login} = useSelector(state => state.renderLoginR);
    const dispatch = useDispatch();

    return (
        <div className={'loginRegistrationStep-form'}>
            <div className={'login-registration-buttons'}>
                <button disabled={!login} onClick={() => dispatch(renderLogin(false))}>Sign up</button>
                <button disabled={login} onClick={() => dispatch(renderLogin(true))} >Sign in</button>
            </div>
            <LoginRegistrationForm {...props}/>
        </div>
    );
};

export default LoginRegistrationStep;