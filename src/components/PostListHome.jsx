import React from 'react';
import PostItemHome from "./PostItemHome";

const PostListHome = ({posts, title, list_type, favorites, updateState}) => {

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{title}</h2>

            {posts.map(post => {
                    if (post.post_type === list_type) // Here need to add a date check.
                        return <PostItemHome post={post} posts={posts} favorites={favorites} updateState={updateState}
                                             key={post.post_id}/>
                    else return null
                }
            )}

        </div>
    );
};

export default PostListHome;