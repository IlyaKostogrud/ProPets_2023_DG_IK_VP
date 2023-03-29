import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import React from "react";

const Feed_post = (/*state*/) => {

    let post_date = Date.now()
    let post_id = post_date
    let post_text = "!!!!"//state.text
    let post_pics = [null,null,null,null]//state.pics
    let post_type = "home"
    let post_author_id = ""//state.name
    //switch(post_type)
    return(
        <div className="feed_post" id={post_id}>
            <div className="post_header">
                <img src={profile} alt="pfp"/>
                <p>{post_author_id}</p>
                <p>{post_date}</p>
            </div>
            <img src={post_pics[0]} name={post_author_id + "_" + post_id + "_0"} alt="post_photo"/>
            <p>{post_text}</p>
            <hr/>
        </div>
    )
}

export default Feed_post