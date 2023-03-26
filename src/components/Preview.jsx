import React, {useState} from 'react';
import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import Lost_post from "../objects/lost_post";
import {changeDisplay} from "../store/mainDisplaySlice";
import {LOST, LOST_FORM} from "../utils/constants";
import {useDispatch} from "react-redux";

const Preview = (state) => {
    const [checked, setChecked] = useState(true);
    const dispatch = useDispatch();
    function clickPublish() {
        if(document.getElementById("fb").checked === true){
            console.log("Sent to facebook")
        }
        let post = new Lost_post(state)
        console.log(post)
        dispatch(changeDisplay(LOST))

    }
    function clickEdit() {
        dispatch(changeDisplay(LOST_FORM))
    }

    return (
        <div className="Preview">
            <h2> Preview and Publish. Please share the post to your FB to be more effective.</h2>
            <div className="Preview_body">
                <img src={state.photo} alt="post_photo"/>
                <h1>{state.type} {state.breed}</h1>
                <p>Color:{state.color}</p>
                <p>Sex:{state.sex}</p>
                <p>Height:{state.height}</p>
                <p>Distinctive_features:{state.distinctive_features}</p>
                <p>Description:{state.description}</p>
                <hr/>
                <p>{state.location}</p>
                <div className="post_footer">
                    <img src={profile} alt="pfp"/>
                    <p>John Goodboi</p>
                    <p>{Date}</p>
                </div>
            </div>
            <div className="Preview_footer">
                <h2>Fingers crossed. We wish your fluffy to be found as soon as possible.
                Your post will expire in two weeks. To make it active again follow the instruction you'll get in email.</h2>
                <label htmlFor="fb">Share to Facebook</label>
                <input type="checkbox" id="fb" name="fb" defaultChecked={checked} onChange={() => setChecked(!checked)}/>
                <input type="button" value="Edit" onClick={()=>clickEdit()}/>
                <input type="button" value="Publish" onClick={()=>clickPublish()}/>
            </div>
            <p className="Fine_print">By clicking "Publish" you agree to us processing your information in accordance with these terms</p>
        </div>


    )
}

export default Preview