import React, {useState} from 'react';
import {
    FOSTERING,
    fostering_page,
    HOTELS,
    hotels_page,
    isDisplayArray,
    VET_HELP, vet_help_page,
    WALKING,
    walking_page
} from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {changeDisplay} from "../store/mainDisplaySlice";
import {Link} from "react-router-dom";

const ServicesButton = () => {
    const {display} = useSelector(state => state.mainDisplay);
    const dispatch = useDispatch();

    const [buttonsGroup, setButtonsGroup] = useState(false);

    const displayButtons = () =>{
        return isDisabled() || buttonsGroup;
    };

    const isDisabled = () =>{
        return isDisplayArray.includes(display);
    };

    return (
        <>
            <button disabled={isDisabled()} onClick={() => setButtonsGroup(!buttonsGroup)}>Services</button>
            {displayButtons() && <div className={'services-buttons-group'}>
                <Link to={hotels_page}>
                    <button disabled={display === HOTELS} onClick={() => dispatch(changeDisplay(HOTELS))}>Hotels</button>
                </Link>
                <Link to={walking_page}>
                    <button disabled={display === WALKING} onClick={() => dispatch(changeDisplay(WALKING))}>Walking</button>
                </Link>
                <Link to={fostering_page}>
                    <button disabled={display === FOSTERING} onClick={() => dispatch(changeDisplay(FOSTERING))}>Fostering</button>
                </Link>
                <Link to={vet_help_page}>
                    <button disabled={display === VET_HELP} onClick={() => dispatch(changeDisplay(VET_HELP))}>VetHelp</button>
                </Link>
            </div>}
        </>
    );
};

export default ServicesButton;