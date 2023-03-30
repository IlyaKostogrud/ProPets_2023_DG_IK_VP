import React, {useEffect, useState} from 'react';
import {getInfo} from "../firebase/propets-service";
import PostListHome from "./PostListHome";

const VetHelp = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async function () {
            const {feed_array} = await getInfo('feedLF', 'mainFeed');
            setPosts(feed_array);
        })();
    }, []);

    return (
        <div>
            <PostListHome posts={posts} title={'VetHelp'} list_type={'vet_help'}/>
        </div>
    );
};

export default VetHelp;