import React from 'react';
import PostItemHome from "./PostItemHome";

const PostListHome = ({posts, title, list_type, favorites, updateFavorites}) => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            {posts.map(post =>
                (post.post_type === list_type) ?
                    <PostItemHome post={post} favorites={favorites} updateFavorites={updateFavorites}
                                  key={post.post_id}/> : null)}
        </div>
    );
};

export default PostListHome;