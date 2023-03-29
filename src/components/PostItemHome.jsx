import React from 'react';
import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg";
import WelcomePageImg2 from "../images/welcome-page-img2.png";

const PostItemHome = (props) => {
    return (
        <div className={'container post-home'}>
            <div className={'row post'}>
                <div className={'col-1 post-author-avatar'}>
                    {/*<img src={profile} alt="post_author_avatar_url"/>*/}
                    {props.post.post_author_id}
                </div>
                <div className={'col-10'}>
                    <div>{props.post.post_author_id}</div>
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