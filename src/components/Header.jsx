import React from 'react';

import HeaderButtons from "./HeaderButtons";

const Header = (props) => {

        const h_color = props.h_color;

        return (
            <div className={`header ${h_color}`}>
                PROPet logo
                <HeaderButtons/>
            </div>
        );
    };

export default Header;