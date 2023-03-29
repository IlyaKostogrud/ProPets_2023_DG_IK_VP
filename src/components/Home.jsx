import React, {useEffect, useState} from 'react';
import PostListHome from "./PostListHome";
import {getMainFeed} from "../firebase/propets-service";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async function () {
            const {feed_array} = await getMainFeed();
            setPosts(feed_array);
        })();
    }, [])

    return (
        <div>
            <PostListHome posts={posts} title={'Home Page'}/>
        </div>
    );
};

export default Home;