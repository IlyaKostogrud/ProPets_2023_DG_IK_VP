import React, {useState} from 'react';
import {HOME, lorem_ipsum, LOST} from "../utils/constants";
import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import upload from "../images/upload.png";
import {drop, allowDrop} from "../utils/drag&drop";
import feed_post from "../objects/feed_post";
import {changeDisplay} from "../store/mainDisplaySlice";
import {useDispatch} from "react-redux";
import {createRoot} from "react-dom/client";
import Lost_post from "../objects/lost_post";
import Feed_post from "../objects/feed_post";
import {render} from "react-dom";
import root from "react-dom";

const AddNew = () => {
    //add indicator of where it was click
    const [text, setText] = useState("")
    const [photos, setPhotos] = useState([])
    const dispatch = useDispatch();
    const clickPublish = () => {
        const post = Feed_post(/*{text, photos}*/)
        console.log(post)
        dispatch(changeDisplay(HOME))
        /*return (
            document.getElementById("e")
        )*/
        //createRoot(document.getElementById({date + " " + name}))
    };
    return (
        <form className="addNew">
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
                <img src={profile} id="pic1" alt="pic1" accept="image/*" onDrop={() => drop()} onDragOver={() => allowDrop()}/>
                <img src={profile} id="pic2" alt="pic2" accept="image/*" onDrop={() => drop()} onDragOver={() => allowDrop()}/>
                <img src={profile} id="pic3" alt="pic3" accept="image/*" onDrop={() => drop()} onDragOver={() => allowDrop()}/>
                <img src={profile} id="pic4" alt="pic4" accept="image/*" onDrop={() => drop()} onDragOver={() => allowDrop()}/>
            </div>
            <div className="Drag&drop">
                <img src={upload} alt="upload"/>
                <p>Drag and drop photos or</p>
                <input type="file" name="Browse" onClick={
                    () => {
                        let pic1 = document.getElementById("pic1")
                        pic1.src.replace("C: \\fakepath\\", "")
                        setPhotos[0](pic1.src)
                    }
                }/>
                <textarea id="upload_list"/>
            </div>
            <br/>
            <div className="post_footer">
                <img src={profile} alt="pfp"/>
                <p>John Goodboi</p>
                <input type="submit" value="Publish" onClick={()=>clickPublish()}/>
            </div>
        </form>
    );
};

export default AddNew;