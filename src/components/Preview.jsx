import React from 'react';
import {lorem_ipsum} from "../utils/constants";
import {render} from "react-dom";
import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";

const Preview = (state) => {
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
            </div>
            <div className="post_footer">
                <img src={profile} alt="pfp"/>
                <p>John Goodboi</p>
                <input type="button" value="Publish" onClick={()=>clickPublish()}/>
            </div>
        </div>


    )
}

export default Preview