import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import React from "react";

const Lost_post = (state) => {
    let type = state.type
    let sex = state.sex
    let breed = state.breed
    let color = state.color
    let height = state.height
    let distinctive_features = state.distinctive_features
    let description = state.description
    let location = state.location
    let photo = state.photo
    let profile = state.profile
    let date = Date()
    let id = state.id
    let name = state.name

    return(
        <div className={"Preview_body_" + id}>
            <img src={photo} alt="post_photo"/>
            <h1>{type} {breed}</h1>
            <p>Color:{color}</p>
            <p>Sex:{sex}</p>
            <p>Height:{height}</p>
            <p>Distinctive_features:{distinctive_features}</p>
            <p>Description:{description}</p>
            <hr/>
            <p>{location}</p>
            <div className="post_footer">
                <img src={profile} alt="pfp"/>
                <p>{name}</p>
                <p>{date}</p>
            </div>
        </div>
    )

}

export default Lost_post