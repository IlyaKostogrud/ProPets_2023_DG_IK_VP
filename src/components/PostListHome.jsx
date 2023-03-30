import React from 'react';
import PostItemHome from "./PostItemHome";

const PostListHome = ({posts, title, list_type}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.reverse().map(post =>
                (post.post_type === list_type) ? <PostItemHome post={post} key={post.post_id}/> : null
            )}
        </div>
    );
};

export default PostListHome;