import React, {useState} from 'react';
import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import Lost_post from "../objects/lost_post";
import {changeDisplay} from "../store/mainDisplaySlice";
import {LOST} from "../utils/constants";
import {useDispatch} from "react-redux";

const Preview = ({changePreview, fields}) => {
    const [checked, setChecked] = useState(true);
    const dispatch = useDispatch();

    function clickPublish() {
        if (document.getElementById("fb").checked === true) {
            console.log("Sent to facebook")
        }
        let post = Lost_post(fields)
        console.log(post)
        post.publish()
        dispatch(changeDisplay(LOST))

    }

    return (
        <div className="Preview">
            <h2> Preview and Publish. Please share the post to your FB to be more effective.</h2>
            <div className="Preview_body">
                <img src={fields.photo} alt="post_photo"/>
                <h2>{fields.type}, {fields.breed}</h2>
                <p>Color:{fields.color}</p>
                <p>Sex:{fields.sex}</p>
                <p>Height:{fields.height}</p>
                <p>Distinctive_features:{fields.distinctive_features}</p>
                <p>Description:{fields.description}</p>
                <hr/>
                <p>{fields.location}</p>
                <div className="post_footer">
                    <img src={profile} alt="pfp"/>
                    <p>John Goodboi</p>
                    <p>{Date()}</p>
                </div>
            </div>
            <div className="Preview_footer">
                <h2>Fingers crossed. We wish your fluffy to be found as soon as possible.
                    Your post will expire in two weeks. To make it active again follow the instruction you'll get in
                    email.</h2>
                <label htmlFor="fb">Share to Facebook</label>
                <input type="checkbox" id="fb" name="fb" defaultChecked={checked}
                       onChange={() => setChecked(!checked)}/>
                <input type="button" value="Edit" onClick={() => changePreview()}/>
                <input type="button" value="Publish" onClick={() => clickPublish()}/>
            </div>
            <p className="Fine_print">By clicking "Publish" you agree to us processing your information in accordance
                with these terms</p>
        </div>
    )
}

export default Preview