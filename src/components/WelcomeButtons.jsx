import React, {useState} from 'react';
import {
    FOUND_FORM,
    found_form_page,
    home_page,
    LOST_FORM,
    lost_form_page
} from "../utils/constants";
import button from "bootstrap/js/src/button";
import {Link} from "react-router-dom";

const WelcomeButtons = ({handleClickProceed}) => {
    const [lost, setLost] = useState(false);
    const [found, setFound] = useState(false);

    const handleMouseEnterLeave = (state, setter) => {
        setter(!state);
    }

    return (
        <div className={'button-container'}>
            <Link to={lost_form_page}>
                <button onMouseEnter={() => handleMouseEnterLeave(lost, setLost)}
                        onMouseLeave={() => handleMouseEnterLeave(lost, setLost)}
                        onClick={() => handleClickProceed(false, LOST_FORM)}>{
                    lost ? 'Click to find!' : 'I lost my pet!'
                }
                </button>
            </Link>
            <Link to={found_form_page}>
                <button onMouseEnter={() => handleMouseEnterLeave(found, setFound)}
                        onMouseLeave={() => handleMouseEnterLeave(found, setFound)}
                        onClick={() => handleClickProceed(false, FOUND_FORM)}>{
                    found ? 'What to do?' : 'I found a pet!'
                }
                </button>
            </Link>
            <div>
                I'm okay, just want to
                <Link to={home_page}>
                    <button onClick={() => handleClickProceed(false)}>JOIN</button>
                </Link>
                the pawsome community!
            </div>
        </div>
    );
};

export default WelcomeButtons;