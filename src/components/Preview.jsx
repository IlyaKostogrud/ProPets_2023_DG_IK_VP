import React from 'react';
import {lorem_ipsum} from "../utils/constants";
import {render} from "react-dom";
import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";

const Preview = (state) => {
    let current_date;
    return (
        <div className="Preview">
            <h2> Preview and Publish. Please share the post to your FB to be more effective.</h2>
            <div className="Preview_body">
                <img src={state.photo}/>
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
                    <p>{current_date}</p>
                </div>
            </div>
            <div className="Preview_footer">
                <h2>Fingers crossed. We wish your fluffy to be found as soon as possible.
                Your post will expire in two weeks. To make it active again follow the instruction you'll get in email.</h2>
                <label htmlFor="fb">Share to Facebook</label>
                <input type="checkbox" id="fb" name="fb" checked/>
                <input type="button" value="Edit" /*onClick={}*//>
                <input type="button" value="Publish" onClick={()=>clickPublish()}/>
            </div>
            <p className="Fine_print">By clicking "Publish" you agree to us processing your information in accordance with these terms</p>
        </div>


    )
}

export default Preview