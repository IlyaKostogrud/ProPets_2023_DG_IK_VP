import React, {useState} from 'react';
import Header from "./Header";
import LoginRegistrationStep from "./LoginRegistrationStep";
import {useDispatch} from "react-redux";
import {renderLogin} from "../store/renderLoginSlice";
import {HOME, LOST_FORM} from "../utils/constants";

let whatToRenderNext;
const WelcomePage = () => {
    const [condition, setCondition] = useState(false);
    const dispatch = useDispatch();

    const handleClickProceed = (bool, display = HOME) => {
        whatToRenderNext = display;
        dispatch(renderLogin(bool));
        changeCondition();
    };

    const changeCondition = () => {
        setCondition(!condition);
    };

    return (
        <div className={'welcome-page container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <Header h_color={'green'} handleClickProceed={handleClickProceed}/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-1'}>
                    <button onClick={()=>handleClickProceed(false, LOST_FORM)}>I lost my pet!</button>
                    <button onClick={()=>handleClickProceed(false)}>I found a pet!</button>
                    <button onClick={()=>handleClickProceed(false)}>JOIN</button>
                </div>
            </div>
            {condition && <LoginRegistrationStep changeCondition={changeCondition} whatToRenderNext={whatToRenderNext}/>}
        </div>
    );
};

export default WelcomePage;