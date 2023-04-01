import React, {useState} from 'react';
import {field_feed_array, HOME, home_page, id_mainFeed, lorem_ipsum, path_feedLF} from "../utils/constants";
import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import upload from "../images/upload.png";
import {drop, allowDrop} from "../utils/drag&drop";
import {changeDisplay} from "../store/mainDisplaySlice";
import {useDispatch, useSelector} from "react-redux";
import {addInfo, uploadImage} from "../firebase/propets-service";
import {Link} from "react-router-dom";

const AddNew = () => {
    //add indicator of where it was click
    const [post_text, setText] = useState("");
    const [post_pics, setPhotos] = useState(null);
    const [post_type, setType] = useState("home");
    const dispatch = useDispatch();
    const clickPublish = async (e) => {
        // const post = Feed_post(/*{text, photos}*/)
        // console.log(post)
        e.preventDefault();
        const uid = sessionStorage.getItem('uid');
        const date = Date.now();
        const fileName = `${uid}_${date}`;
        await uploadImage(post_pics, uid, fileName);
        const temp = {
            post_date: date,
            post_id: date,
            post_text,
            post_pics: [fileName], //[null,null,null,null]//state.pics
            post_type,
            post_author_id: uid,
        };
        await addInfo(temp, path_feedLF, id_mainFeed, field_feed_array);
        dispatch(changeDisplay(HOME));
        /*return (
            document.getElementById("e")
        )*/
        //createRoot(document.getElementById({date + " " + name}))
    };

    const userInfo = useSelector(state => state.userInfo.user);

    return (
        <form className="addNew">
            <h2> Your new post! Simply text, add photos and publish.</h2>
            <div className={'container addNew-content'}>
                <div className={'row'} style={{height: '60vh'}}>
                    <div className={'col-2'}>
                        <label htmlFor="newPost">
                            <p>Text:</p>
                            <p>(up to 1500 char)</p>
                        </label>
                    </div>
                    <div className={'col-10'}>
                    <textarea id="newPost" style={{width: '100%', height: '95%'}} placeholder={lorem_ipsum}
                              onChange={(e) => setText(e.target.value)}/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-2'}>
                        <label htmlFor="photos">
                            <p>Photo:</p>
                            {/*<p>up to 4 images</p>*/}
                        </label>
                    </div>
                    <div className={'col-10'}>
                        {/*<div id="photos">*/}
                        {/*    <img src={profile} id="pic1" alt="pic1" accept="image/*" onDrop={() => drop()}*/}
                        {/*         onDragOver={() => allowDrop()}/>*/}
                        {/*</div>*/}
                        <div className="Drag&drop">
                            {/*<img src={upload} alt="upload"/>*/}
                            {/*<p>Drag and drop photos or</p>*/}
                            <input type="file" name="Browse" onChange={(e) => setPhotos(e.target.files[0])
                                // let pic1 = document.getElementById("pic1")
                                // pic1.src.replace("C: \\fakepath\\", "")
                                // setPhotos([pic1.src])
                            }/>
                            {/*<textarea id="upload_list"/>*/}
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-2'}>
                        <label htmlFor="type">Post type:</label>
                    </div>
                    <div className={'col-10'}>
                        <select value={post_type} name="type" id="type" onChange={
                            (e) => setType(e.target.value)}>
                            <option value="home">Home</option>
                            <option value="walking">Walking</option>
                            <option value="fostering">Fostering</option>
                            <option value="vet_help">Vet help</option>
                            <option value="hotels">Hotels</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div className="row post_footer">
                    <div className={'col-2'}>
                        <img className={'author_avatar'} src={userInfo.avatar_url} alt={'Profile avatar'}/>
                    </div>
                    <div className={'col-8'}>{userInfo.name}</div>
                    <div className={'col-2'}>
                        <Link to={home_page}>
                            <input type="submit" value={'Publish'} onChange={(e) => clickPublish(e)}/>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddNew;