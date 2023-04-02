import React, {useEffect, useState} from 'react';
import {getInfo} from "../firebase/propets-service";
import PostListLostFound from "./PostListLostFound";

const LostFoundFeed = ({title, list_type}) => {
    const [state, setState] = useState({
        posts: [],
        favorites: [],
        loading: true
    })

    const updateState = (data, field) => {
        setState(prevState => ({...prevState, [field]: data}));
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
            <PostListLostFound posts={state.posts} favorites={state.favorites} updateState={updateState}
                               title={title} list_type={list_type}/>
        </div>
    );
};

export default LostFoundFeed;