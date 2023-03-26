import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import React from "react";

const feed_post = (state) => {
    this.date = Date
    this.text = state.text
    this.photos = state.photos
    return(
        <div className="feed_post">
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