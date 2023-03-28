import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import React from "react";

const Feed_post = (/*state*/) => {

    let date = new Date()
    let text = "!!!!"//state.text
    let photos = [""]//state.photos
    //let is_service = state.is_service
    let favourite = false
    let name = ""//state.name

    return(
        <div className="feed_post" id="e">
            <div className="post_header">
                <img src={profile} alt="pfp"/>
                <p>{name}</p>
                <p>{date}</p>
            </div>
            <img src={photos[0]} alt="post_photo"/>
            <p>{text}</p>
            <hr/>
            <p>insert_star</p>
        </div>
    )
}

export default Feed_post