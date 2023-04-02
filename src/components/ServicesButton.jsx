import React, {useState} from 'react';
import {
    //FOSTERING,
    fostering_page,
    //HOTELS,
    hotels_page,
    //isDisplayArray,
    services_page,
    //VET_HELP,
    vet_help_page,
    //WALKING,
    walking_page
} from "../utils/constants";
//import {useDispatch, useSelector} from "react-redux";
//import {changeDisplay} from "../store/mainDisplaySlice";
import {Link, useLocation} from "react-router-dom";

const ServicesButton = () => {
    const location = useLocation().pathname
    //const {display} = useSelector(state => state.mainDisplay);
    //const dispatch = useDispatch();

    const [buttonsGroup, setButtonsGroup] = useState(false);

    const displayButtons = () =>{
        return location === `${services_page}/*`/*isDisabled()*/ || buttonsGroup;
    };

    /*const isDisabled = () =>{
        return isDisplayArray.includes(display);
    };*/

    return (
        <>
            <button disabled={location === `${services_page}/*`/*isDisabled()*/} onClick={() => setButtonsGroup(!buttonsGroup)}>Services</button>
            {displayButtons() && <div className={'services-buttons-group'}>
                <Link to={hotels_page}>
                    <button disabled={location === hotels_page} /*onClick={() => dispatch(changeDisplay(HOTELS))}*/>Hotels</button>
                </Link>
                <Link to={walking_page}>
                    <button disabled={location === walking_page} /*onClick={() => dispatch(changeDisplay(WALKING))}*/>Walking</button>
                </Link>
                <Link to={fostering_page}>
                    <button disabled={location === fostering_page} /*onClick={() => dispatch(changeDisplay(FOSTERING))}*/>Fostering</button>
                </Link>
                <Link to={vet_help_page}>
                    <button disabled={location === vet_help_page} /*onClick={() => dispatch(changeDisplay(VET_HELP))}*/>VetHelp</button>
                </Link>
            </div>}
        </>
    );
};

export default ServicesButton;