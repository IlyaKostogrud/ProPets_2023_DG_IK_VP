import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import React from "react";

const Lost_post = (state) => {
    this.date = Date
    this.type = state.type
    this.sex = state.sex
    this.breed = state.breed
    this.color = state.color
    this.height = state.height
    this.distinctive_features = state.distinctive_features
    this.description = state.description
    this.location = state.location
    this.photo = state.photo
    this.phone = state.phone
    this.email = state.email
    this.facebook_profile = state.facebook_profile
    return(
        <div className="lost_post">
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
    )
}

export default Lost_post