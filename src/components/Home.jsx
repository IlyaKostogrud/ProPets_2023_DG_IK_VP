import React, {useState} from 'react';
import PostItemHome from "./PostItemHome";
import {lorem_ipsum} from "../utils/constants";
import PostListHome from "./PostListHome";

const Home = () => {
    const [posts, setPosts] = useState([
        {postID:'1111',authorName:'John Goodboi',authorIcon:'author Icon',postTime:Date.now(),picture:'Picture',text:lorem_ipsum},
        {postID:'2222',authorName:'John Goodboi',authorIcon:'author Icon',postTime:Date.now(),picture:'Picture',text:lorem_ipsum},
        {postID:'3333',authorName:'John Goodboi',authorIcon:'author Icon',postTime:Date.now(),picture:'Picture',text:lorem_ipsum}
    ])
    return (
        <div>
            <PostListHome posts={posts} title={'Home Page'}/>
        </div>
    );
};

export default Home;