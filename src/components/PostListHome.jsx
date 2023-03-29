import React from 'react';
import PostItemHome from "./PostItemHome";

const PostListHome = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map(post=>
                <PostItemHome post={post} key={post.post_id}/>)}
        </div>
    );
};

export default PostListHome;