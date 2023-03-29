import React, {useEffect, useState} from 'react';
import PostListHome from "./PostListHome";
import {getInfo} from "../firebase/propets-service";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async function () {
            const {feed_array} = await getInfo('feedLF', 'mainFeed');
            setPosts(feed_array);
        })();
    }, []);

    return (
        <div>
            <PostListHome posts={posts} title={'Home Page'}/>
        </div>
    );
};

export default Home;