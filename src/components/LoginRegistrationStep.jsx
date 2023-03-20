import React from 'react';
import LoginRegistrationForm from "./LoginRegistrationForm";
import {useDispatch, useSelector} from "react-redux";
import {renderLogin} from "../store/renderLoginSlice";

const LoginRegistrationStep = (props) => {
    const {login} = useSelector(state => state.renderLoginR);
    const dispatch = useDispatch();

    return (
        <div>
            <button disabled={!login} onClick={() => dispatch(renderLogin(false))}>Sign up</button>
            <button disabled={login} onClick={() => dispatch(renderLogin(true))} >Sign in</button>
            <LoginRegistrationForm {...props}/>
        </div>
    );
};

export default LoginRegistrationStep;