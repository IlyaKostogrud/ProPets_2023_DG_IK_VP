import React, {useEffect, useState} from 'react';
import {getInfo} from "../firebase/propets-service";
import {path_users} from "../utils/constants";

let picture_url;
let author_name;
const PostItemHome = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        (async function (){
            const temp = await getInfo(path_users,props.post.post_author_id);
            picture_url = temp.avatar_url;
            author_name = temp.name;
            setLoading(!loading);
        })();
    },[]);

    return (
        <div className={'container post-home'}>
            <div className={'row post'}>
                <div className={'col-1 post-author-avatar'}>
                    <img className={'author_avatar'} src={picture_url} alt="post_author_avatar_url"/>
                </div>
                <div className={'col-10'}>
                    <div>{author_name}</div>
                    <div>Time: {props.post.post_date}</div>
                    <div>Pic name: {props.post.post_pics[0]}</div>
                    {/*<img className={'welcome-page-img2'} src={WelcomePageImg2} alt="Puppy,cat and bird"/>*/}
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