import React, {useState} from 'react';
import {LOST_FORM} from "../utils/constants";
import button from "bootstrap/js/src/button";

const WelcomeButtons = ({handleClickProceed}) => {
    const [lost, setLost] = useState(false);
    const [found, setFound] = useState(false);

    const handleMouseEnterLeave = (state, setter) => {
        setter(!state);
    }

    return (
        <div className={'button-container'}>
            <button onMouseEnter={() => handleMouseEnterLeave(lost, setLost)}
                    onMouseLeave={() => handleMouseEnterLeave(lost, setLost)}
                    onClick={() => handleClickProceed(false, LOST_FORM)}>{
                lost ? 'Click to find!' : 'I lost my pet!'
            }
            </button>
            <button onMouseEnter={() => handleMouseEnterLeave(found, setFound)}
                    onMouseLeave={() => handleMouseEnterLeave(found, setFound)}
                    onClick={() => handleClickProceed(false)}>{
                found ? 'What to do?' : 'I found a pet!'
            }
            </button>
            <div>
                I'm okay, just want to
                <button onClick={() => handleClickProceed(false)}>JOIN</button>
                the pawsome community!
            </div>
        </div>
    );
};

export default WelcomeButtons;