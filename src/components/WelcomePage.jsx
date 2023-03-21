import React, {useState} from 'react';
import Header from "./Header";
import LoginRegistrationStep from "./LoginRegistrationStep";
import {useDispatch} from "react-redux";
import {renderLogin} from "../store/renderLoginSlice";
import {HOME} from "../utils/constants";
import WelcomeButtons from "./WelcomeButtons";

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
                <p>Welcome to your <span className={'pawfessional'}>pawfessional</span> community</p>
                <WelcomeButtons handleClickProceed={handleClickProceed}/>
            </div>
            {condition && <LoginRegistrationStep changeCondition={changeCondition} whatToRenderNext={whatToRenderNext}/>}
        </div>
    );
};

export default WelcomePage;