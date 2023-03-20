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
            <form>
                {login || <input type={'text'} placeholder={'Helen Johnson'}/>}
                <input type={'email'} placeholder={'helenjohnson@gmail.com'}/>
                <input type={'password'}/>
                {login || <input type={'password'}/>}
            </form>
            <button onClick={() => changeCondition()}>Cancel</button>
            <button onClick={handleClickSignIn}>Submit</button>
        </div>
    );
};

export default LoginRegistrationForm;