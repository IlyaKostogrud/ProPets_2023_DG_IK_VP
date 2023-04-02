import React from 'react';
import PostItemLostFound from "./PostItemLostFound";

const PostListLostFound = ({posts, title, list_type, favorites, updateState}) => {
    // const post = {
    //     post_date: Date.now(),
    //     post_id: Date.now(),
    //     //post_text,
    //     post_pics: ['fileName'],
    //     post_type: 'lost',
    //     post_author_id: Date.now(),
    //
    //     type: 'type',
    //     sex: 'sex',
    //     breed: 'breed',
    //     color: 'color',
    //     height: 'height',
    //     distinctive_features: 'distinctive_features',
    //     description: 'description',
    //     location: 'location',
    //     //photo: 'photo',
    //     //imageUrl: 'imageUrl',
    //     phone: 'phone',
    //     email: 'email',
    //     facebook_profile: 'facebook_profile'
    // }

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            {posts.map(post => {
                    if (post.post_type === list_type) // Here need to add a date check.
                        return <PostItemLostFound post={post} posts={posts} favorites={favorites} updateState={updateState}
                                             key={post.post_id}/>
                    else return null
                }
            )}

            {/*<PostItemLostFound post={post} favorites={favorites} updateFavorites={updateFavorites}*/}
            {/*                   key={post.post_id}/>*/}

        </div>
    );
};

export default PostListLostFound;