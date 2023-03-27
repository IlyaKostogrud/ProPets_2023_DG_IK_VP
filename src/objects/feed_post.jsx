import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import React from "react";

class Feed_post {
    constructor(state) {
        this.date = Date()
        this.text = state.text
        this.photos = state.photos
        this.is_service = state.is_service
        this.favourite = false
        this.name = state.name
    }
    publish(){
        return(
            <div className="feed_post">
                <div className="post_header">
                    <img src={profile} alt="pfp"/>
                    <p>{this.name}</p>
                    <p>{this.date}</p>
                </div>
                <img src={this.photos} alt="post_photo"/>
                <p>{this.text}</p>
                <hr/>
                <p>insert_star</p>
            </div>
        )
    }
}

export default Feed_post