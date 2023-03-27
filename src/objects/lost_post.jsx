import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import React from "react";

class Lost_post{
    constructor(state) {
        this.type = state.type
        this.sex = state.sex
        this.breed = state.breed
        this.color = state.color
        this.height = state.height
        this.distinctive_features = state.distinctive_features
        this.description = state.description
        this.location = state.location
        this.photo = state.photo
        this.profile = state.profile
        this.date = Date
        this.id = state.id
        this.name = state.name
    }
    publish(){
        return(
            <div className="Preview_body">
                <img src={this.photo} alt="post_photo"/>
                <h1>{this.type} {this.breed}</h1>
                <p>Color:{this.color}</p>
                <p>Sex:{this.sex}</p>
                <p>Height:{this.height}</p>
                <p>Distinctive_features:{this.distinctive_features}</p>
                <p>Description:{this.description}</p>
                <hr/>
                <p>{this.location}</p>
                <div className="post_footer">
                    <img src={profile} alt="pfp"/>
                    <p>{this.name}</p>
                    <p>{Date}</p>
                </div>
            </div>
        )
    }

}

export default Lost_post