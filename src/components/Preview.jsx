import React, {useState} from 'react';
import {
    messages,
    path_feedLF,
    id_mainFeed,
    field_feed_array,
    lost_feed_page,
    found_feed_page
} from "../utils/constants";
import {addInfo, uploadImage} from "../firebase/propets-service";
import {useNavigate} from "react-router-dom";

const Preview = ({changePreview, fields, name, avatar_url}) => {
    const [checked, setChecked] = useState(true);
    const message = fields.post_type === "lost" ? messages[0] : messages[1]
    const link = fields.post_type === "lost" ? lost_feed_page : found_feed_page

    const navigate = useNavigate();

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
        };
        await addInfo(temp, path_feedLF, id_mainFeed, field_feed_array);
        navigate(link);
    };

    return (
        <div className="Preview container">
            <h2> Preview and Publish. Please share the post to your FB to be more effective.</h2>

            <div className={'row Preview_body'}>
                <div className={'col-5 post-lost-found-image-wrap'}>
                    <img className={'post-lost-found-image'} src={fields.imageUrl} alt={'post'}/>
                </div>

                <div className={'col-7 container'}>
                    <div className={'row pet-type-breed colored-text'}>
                        <h3>({fields.post_type}) {fields.type}, {fields.breed}</h3>
                    </div>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            <div><span className={'colored-text'}>Color: </span>{fields.color}</div>
                            <div><span className={'colored-text'}>Sex: </span>{fields.sex}</div>
                            <div><span className={'colored-text'}>Height: </span>{fields.height}</div>
                        </div>
                        <div className={'col-8'}>
                            <p><span
                                className={'colored-text'}>Distinctive features: </span>{fields.distinctive_features}
                            </p>
                        </div>
                    </div>

                    <br/>

                    <div className={'row'}>
                        <p><span className={'colored-text'}>Description: </span>{fields.description}</p>
                    </div>

                    <div className={'row'}>
                        <p><span className={'colored-text'}>Location: </span>{fields.location}</p>
                    </div>

                    <div className={'row post_date'}>
                        <p>{Date()}</p>
                    </div>

                    <div className={'row author-info'}>
                        <div className={'col-5'}>
                            <div className={'post-author-avatar'}>
                                <img className={'author_avatar'} src={avatar_url} alt="post_author_avatar_url"/>
                            </div>
                            <h5>{name}</h5>
                        </div>
                        <div className={'col-7 author-contacts'}>
                            <div><span className={'colored-text'}>Phone: </span>{fields.phone}</div>
                            <div><span className={'colored-text'}>E-mail: </span>{fields.email}</div>
                            <div><span className={'colored-text'}>Facebook: </span>{fields.facebook_profile}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Preview_footer">
                <h3>{message}</h3>
                <label htmlFor="fb">Share to Facebook</label>
                <input type="checkbox" id="fb" name="fb" defaultChecked={checked}
                       onChange={() => setChecked(!checked)}/>
                <input type="button" value="Edit" onClick={() => changePreview()}/>
                <input type="button" value="Publish" onClick={clickPublish}/>
            </div>
            <p className="Fine_print">By clicking "Publish" you agree to us processing your information in accordance
                with these terms</p>
        </div>
    );
};

export default Preview