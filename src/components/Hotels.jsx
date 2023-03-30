import React, {useEffect, useState} from 'react';
import {getInfo} from "../firebase/propets-service";
import PostListHome from "./PostListHome";

const Hotels = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async function () {
            const {feed_array} = await getInfo('feedLF', 'mainFeed');
            setPosts(feed_array);
        })();
    }, []);

    return (
        <div>
            <PostListHome posts={posts} title={'Hotels'} list_type={'hotels'}/>
        </div>
    );
};

export default Hotels;