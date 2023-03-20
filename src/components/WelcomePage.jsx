import React, {useState} from 'react';
import Header from "./Header";
import LoginRegistrationStep from "./LoginRegistrationStep";

let logOrReg;
const WelcomePage = () => {
    const [condition, setCondition] = useState(false);

    const handleClickProceed = (bool) =>{
        logOrReg = bool;
        setCondition(true);
    };

    return (
        <div className={'welcome-page container'}>
            <div className={'row'}>
                <div className={'col-12'}>
                    <Header h_color={'green'}/>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-1'}>
                    <button onClick={() => handleClickProceed(true)}>I lost my pet!</button>
                    <button onClick={() => handleClickProceed(true)}>I found a pet!</button>
                    <button onClick={() => handleClickProceed(false)}>JOIN</button>
                </div>
            </div>


            {condition && <LoginRegistrationStep logOrReg={logOrReg}/>}
        </div>
    );
};

export default WelcomePage;