import React, {useEffect, useState} from 'react';
import {getInfo} from "../firebase/propets-service";
import {path_users} from "../utils/constants";


const PostItemHome = (props) => {
    const [loading, setLoading] = useState(true);
    const [picture_url, setPicture_url] = useState('')
    const [author_name, setAuthor_name] = useState('');

    useEffect(()=>{
        (async function (){
            let temp = await getInfo(path_users,props.post.post_author_id);
            console.log(temp);
            setPicture_url(temp.avatar_url);
            setAuthor_name(temp.name);
            setLoading(!loading);
        })();
    },[]);

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
                    <div>Pic name: {props.post.post_pics[0]}</div>
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