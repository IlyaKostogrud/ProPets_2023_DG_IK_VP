import React from 'react';
import {FOSTERING, HOTELS, VET_HELP, WALKING} from "../utils/constants";
import {changeDisplay} from "../store/mainDisplaySlice";
import {useDispatch, useSelector} from "react-redux";

const ServicesButtonsGroup = () => {
    const {display} = useSelector(state => state.mainDisplay);
    const dispatch = useDispatch();

    return (
        <div className={'services-buttons-group'}>
            <button disabled={display === HOTELS} onClick={() => dispatch(changeDisplay(HOTELS))}>Hotels</button>
            <button disabled={display === WALKING} onClick={() => dispatch(changeDisplay(WALKING))}>Walking</button>
            <button disabled={display === FOSTERING} onClick={() => dispatch(changeDisplay(FOSTERING))}>Fostering</button>
            <button disabled={display === VET_HELP} onClick={() => dispatch(changeDisplay(VET_HELP))}>VetHelp</button>
        </div>
    );
};

export default ServicesButtonsGroup;