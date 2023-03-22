import React from 'react';

import HeaderButtons from "./HeaderButtons";
import ProPETS_logo from "../images/Group 1.svg"

const Header = (props) => {

        const h_color = props.h_color;

        return (
            <div className={`header ${h_color}`}>
                <img className={'ProPETS_logo'} src={ProPETS_logo} alt="ProPETS_logo"/>
                <HeaderButtons handleClickProceed={props.handleClickProceed}/>
            </div>
        );
    };

export default Header;