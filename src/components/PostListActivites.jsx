import React from 'react';
import PostItemHome from "./PostItemHome";
import PostItemLostFound from "./PostItemLostFound";

const PostListActivities = ({posts, title, favorites, updateState}) => {
    const uid = sessionStorage.getItem('uid');
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{title}</h2>

            {posts.map(post => {
                    if (post.post_author_id === uid) // Here need to add a date check.
                        if (post.post_type === 'lost' || post.post_type === 'found')
                            return <PostItemLostFound post={post} posts={posts} favorites={favorites}
                                                      updateState={updateState}
                                                      key={post.post_id}/>
                        else
                            return <PostItemHome post={post} posts={posts} favorites={favorites} updateState={updateState}
                                                 key={post.post_id}/>
                    else return null
                }
            )}

        </div>
    );
};

export default PostListActivities;