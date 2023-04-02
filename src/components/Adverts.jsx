import React from 'react';
import advert_1 from "../images/3c736769edb2e030741403fbfcee33f4.png";

const Adverts = () => {
    return (
        <div className={'adverts-image-wrap'}>
            <img className={'adverts-image'} src = {advert_1} alt="Some advertising"/>
        </div>
    );
};

export default Adverts;