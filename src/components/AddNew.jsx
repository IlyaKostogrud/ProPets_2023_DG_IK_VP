import React, {useState} from 'react';
import {lorem_ipsum} from "../utils/constants";
import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import upload from "../images/upload.png";
import {drop, allowDrop} from "../utils/drag&drop";

const AddNew = () => {
    const [text, setText] = useState("")
    const [photos, setPhotos] = useState([])
    const clickPublish = () => {
        console.log("state")
    };
    return (
        <div className="addNew">
            <h1> Your new post! Simply text, add photos and publish.</h1>
            <label htmlFor="newPost">
                <p>Text:</p>
                <p>up to 1500 char</p>
            </label>
            <textarea id="newPost" placeholder={lorem_ipsum} onChange={(e) => setText(e.target.value)}/>
            <br/>
            <label htmlFor="photos">
                <p>Photos:</p>
                <p>up to 4 images</p>
            </label>
            <div id="photos">
                <img src={profile} alt="pic1" onDrop={drop} onDragOver={allowDrop}/>
                <img src={profile} alt="pic2" onDrop={drop} onDragOver={allowDrop}/>
                <img src={profile} alt="pic3" onDrop={drop} onDragOver={allowDrop}/>
                <img src={profile} alt="pic4" onDrop={drop} onDragOver={allowDrop}/>
            </div>
            <div className="Drag&drop">
                <img src={upload} alt="upload"/>
                <p>Drag and drop photos or</p>
                <input type="file" name="Browse"/>
                <textarea id="upload_list"/>
            </div>
            <br/>
            <div className="post_footer">
                <img src={profile} alt="pfp"/>
                <p>John Goodboi</p>
                <input type="button" value="Publish" onClick={()=>clickPublish()}/>
            </div>
        </div>
    );
};

export default AddNew;