import React, {useState} from 'react';
import {field_feed_array, HOME, id_mainFeed, lorem_ipsum, path_feedLF} from "../utils/constants";
import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import upload from "../images/upload.png";
import {drop, allowDrop} from "../utils/drag&drop";
import {changeDisplay} from "../store/mainDisplaySlice";
import {useDispatch} from "react-redux";
import {addInfo} from "../firebase/propets-service";

const AddNew = () => {
    //add indicator of where it was click
    const [post_text, setText] = useState("")
    const [post_pics, setPhotos] = useState([])
    const [post_type, setType] = useState("home")
    const dispatch = useDispatch();
    const clickPublish = async (e) => {
        // const post = Feed_post(/*{text, photos}*/)
        // console.log(post)
        e.preventDefault();
        const uid = sessionStorage.getItem('uid');
        const date = Date.now();
        const temp = {
            post_date: date,
            post_id: date,
            post_text,
            post_pics: [uid + '_' + date], //[null,null,null,null]//state.pics
            post_type: "home",
            post_author_id: uid,
        };
        await addInfo(temp, path_feedLF, id_mainFeed, field_feed_array);
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
                <img src={profile} id="pic1" alt="pic1" accept="image/*" onDrop={() => drop()}
                     onDragOver={() => allowDrop()}/>
                <img src={profile} id="pic2" alt="pic2" accept="image/*" onDrop={() => drop()}
                     onDragOver={() => allowDrop()}/>
                <img src={profile} id="pic3" alt="pic3" accept="image/*" onDrop={() => drop()}
                     onDragOver={() => allowDrop()}/>
                <img src={profile} id="pic4" alt="pic4" accept="image/*" onDrop={() => drop()}
                     onDragOver={() => allowDrop()}/>
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
            <label htmlFor="type">Post type:</label>
            <select value = {post_type} name = "type" id="type" onChange={
                (e) => setType(e.target.value)
            }>
                <option value="home">Home</option>
                <option value="walking">Walking</option>
                <option value="fostering">Fostering</option>
                <option value="vet_help">Vet help</option>
                <option value="hotels">Hotels</option>
            </select>
            <br/>
            <div className="post_footer">
                <img src={profile} alt="pfp"/>
                <p>John Goodboi</p>
                <input type="submit" value="Publish" onClick={(e) => clickPublish(e)}/>
            </div>
        </form>
    );
};

export default AddNew;