import React, {useState} from 'react';
import {
    //LOST,
    //FOUND,
    messages,
    path_feedLF,
    id_mainFeed,
    field_feed_array,
    lost_feed_page,
    found_feed_page
} from "../utils/constants";
import {addInfo, uploadImage} from "../firebase/propets-service";
//import {useNavigate} from "react-router-dom";
import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import Lost_post from "../objects/lost_post";
//import {changeDisplay} from "../store/mainDisplaySlice";
//import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
const Preview = ({changePreview, fields, name, avatar_url}) => {
    const [checked, setChecked] = useState(true);
    //const dispatch = useDispatch();
    const message = fields.post_type === "lost" ? messages[0] : messages[1]
    const link = fields.post_type === "lost" ? lost_feed_page : found_feed_page
    //const navigate = useNavigate();

    const clickPublish = async () => {
        if (document.getElementById("fb").checked === true) {
            console.log("Sent to facebook")
        }
        const post_date = Date.now();
        const uid = sessionStorage.getItem('uid');
        const fileName = `${uid}_${post_date}`;
        await uploadImage(fields.photo, uid, fileName);
        const temp = {
            post_date: post_date,
            post_id: post_date,
            post_pics: [fileName],
            post_type: fields.post_type,
            post_author_id: uid,
            type: fields.type,
            sex: fields.sex,
            breed: fields.breed,
            color: fields.color,
            height: fields.height,
            distinctive_features: fields.distinctive_features,
            description: fields.description,
            location: fields.location,
            phone: fields.phone,
            email: fields.email,
            facebook_profile: fields.facebook_profile
        }
        await addInfo(temp, path_feedLF, id_mainFeed, field_feed_array);
        /*if(fields.post_type === "lost"){
            navigate(lost_feed_page);
            //dispatch(changeDisplay(LOST));
        }
        else
            navigate(found_feed_page);
            //dispatch(changeDisplay(FOUND));
         */
    };
    return (
        <div className="Preview">
            <h2> Preview and Publish. Please share the post to your FB to be more effective.</h2>
            <div className="Preview_body">
                <img src={fields.imageUrl} alt="post_photo"/>
                <h2>{fields.type}, {fields.breed}</h2>
                <p>Color:{fields.color}</p>
                <p>Sex:{fields.sex}</p>
                <p>Height:{fields.height}</p>
                <p>Distinctive_features:{fields.distinctive_features}</p>
                <p>Description:{fields.description}</p>
                <hr/>
                <p>{fields.location}</p>
                <div className="post_footer">
                    <img className={'author_avatar'} src={avatar_url} alt="pfp"/>
                    <p>{name}</p>
                    <p>{Date()}</p>
                </div>
            </div>
            <div className="Preview_footer">
                <h2>{message}</h2>
                <label htmlFor="fb">Share to Facebook</label>
                <input type="checkbox" id="fb" name="fb" defaultChecked={checked}
                       onChange={() => setChecked(!checked)}/>
                <input type="button" value="Edit" onClick={() => changePreview()}/>
                <Link to={link}>
                    <input type="button" value="Publish" onClick={() => clickPublish()}/>
                </Link>
            </div>
            <p className="Fine_print">By clicking "Publish" you agree to us processing your information in accordance
                with these terms</p>
        </div>
    );
};

export default Preview