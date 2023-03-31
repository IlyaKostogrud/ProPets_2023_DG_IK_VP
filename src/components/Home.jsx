import React, {useEffect, useState} from 'react';
import PostListHome from "./PostListHome";
import {getInfo} from "../firebase/propets-service";

const Home = () => {
    const [state, setState] = useState({
        posts: [],
        favorites: [],
        loading: true
    })

    const updateFavorites = (favorites) => {
        setState(prevState => ({...prevState, favorites: favorites}));
    }

    useEffect(() => {
        (async function () {
            const uid = sessionStorage.getItem('uid');
            const {feed_array} = await getInfo('feedLF', 'mainFeed');
            const {fav_array} = await getInfo('favorites', uid);
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
            <PostListHome posts={state.posts} favorites={state.favorites} updateFavorites={updateFavorites} title={'Home Page'} list_type={'home'}/>
        </div>
    );
};

export default Home;