import React, {useState} from 'react';
import {isDisplayArray} from "../utils/constants";
import {useSelector} from "react-redux";
import ServicesButtonsGroup from "./ServicesButtonsGroup";

const ServicesButton = () => {
    const {display} = useSelector(state => state.mainDisplay);
    const [buttonsGroup, setButtonsGroup] = useState(false);

    const buttons = () =>{
        return isDisabled() || buttonsGroup;
    };

    const isDisabled = () =>{
      for (let i = 0;i<isDisplayArray.length;i++){
          if (display === isDisplayArray[i])
              return true;
      }
        return false;
    };

    return (
        <>
            <button disabled={isDisabled()} onClick={() => setButtonsGroup(!buttonsGroup)}>Services</button>
            {buttons() && <ServicesButtonsGroup/>}
        </>
    );
};

export default ServicesButton;