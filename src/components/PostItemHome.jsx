import React, {useEffect, useState} from 'react';
import {getImageURL, getInfo} from "../firebase/propets-service";
import {path_users} from "../utils/constants";


const PostItemHome = (props) => {
    const [loading, setLoading] = useState(true);
    const [picture_url, setPicture_url] = useState('')
    const [author_name, setAuthor_name] = useState('');
    const [post_picture_url, setPost_picture_url] = useState('');

    useEffect(() => {
        (async function () {
            const uid = props.post.post_author_id;
            const info = await getInfo(path_users, uid);
            const picture = await getImageURL(uid, props.post.post_pics[0]);
            setPost_picture_url(picture);
            setPicture_url(info.avatar_url);
            setAuthor_name(info.name);
            setLoading(!loading);
        })();
    }, []);

    const date = new Date(props.post.post_date).toString();


    return (
        <div className={'container post-home'}>
            <div className={'row post'}>
                <div className={'col-1 post-author-avatar'}>
                    <img className={'author_avatar'} src={picture_url} alt="post_author_avatar_url"/>
                </div>
                <div className={'col-10'}>
                    <div>{author_name}</div>
                    <div className={'post_date'}>{date}</div>
                    <div className={'post-image'}>
                        <img src={post_picture_url} alt={'post'}/>
                    </div>
                    <div>Text: {props.post.post_text}</div>
                </div>
                <div className={'col-1 post-menu-buttons'}>
                    post-menu-buttons
                </div>
            </div>
        </div>
    );
};

export default PostItemHome;