import React from 'react';

import HeaderButtons from "./HeaderButtons";
import ProPetsLogoWhite from "../images/ProPetsLogoWhite.svg"

const Header = (props) => {

        const h_color = props.h_color;

        return (
            <div className={`header ${h_color}`}>
                <img className={'ProPETS_logo'} src={ProPetsLogoWhite} alt="ProPETS_logo"/>
                <HeaderButtons handleClickProceed={props.handleClickProceed}/>
            </div>
        );
    };

export default Header;