import React, {useState} from 'react';
import {LOST_FORM} from "../utils/constants";

const WelcomeButtons = ({handleClickProceed}) => {
    const [lost, setLost] = useState(false);
    const [found, setFound] = useState(false);

    const handleMouseEnterLeave = (state, setter) => {
        setter(!state);
    }

    return (
        <div className={'col-1'}>
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
            <button onClick={() => handleClickProceed(false)}>JOIN</button>
        </div>
    );
};

export default WelcomeButtons;