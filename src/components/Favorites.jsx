import React, {useEffect, useState} from 'react';
import {getInfo} from "../firebase/propets-service";
import PostItemHome from "./PostItemHome";

const Favorites = () => {
    const [state, setState] = useState({
        posts: [],
        favorites: [],
        loading: true
    })

    const updateState = (favorites) => {
        setState(prevState => ({...prevState, favorites: favorites}));
    }

    useEffect(() => {
        (async function () {
            const uid = sessionStorage.getItem('uid');
            const {feed_array} = await getInfo('feedLF', 'mainFeed', 'feed_array');
            const {fav_array} = await getInfo('favorites', uid, 'fav_array');
            setState({
                posts: feed_array.reverse(),
                favorites: fav_array,
                loading: false
            });
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (state.loading ||
        <div>
            <h2 style={{textAlign: 'center'}}>Favorites</h2>
            {state.posts.map(post => {
                if (state.favorites.includes(post.post_id))
                    return <PostItemHome post={post} favorites={state.favorites} updateState={updateState}
                                         key={post.post_id}/>
                else
                    return null;
            })}
        </div>
    );
};

export default Favorites;