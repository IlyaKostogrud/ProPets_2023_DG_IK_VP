import React, {useState} from 'react';
import {FOSTERING, HOTELS, isDisplayArray, VET_HELP, WALKING} from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {changeDisplay} from "../store/mainDisplaySlice";

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
                <button disabled={display === HOTELS} onClick={() => dispatch(changeDisplay(HOTELS))}>Hotels</button>
                <button disabled={display === WALKING} onClick={() => dispatch(changeDisplay(WALKING))}>Walking</button>
                <button disabled={display === FOSTERING} onClick={() => dispatch(changeDisplay(FOSTERING))}>Fostering</button>
                <button disabled={display === VET_HELP} onClick={() => dispatch(changeDisplay(VET_HELP))}>VetHelp</button>
            </div>}
        </>
    );
};

export default ServicesButton;