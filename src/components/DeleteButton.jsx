import React from 'react';
import {updateInfo} from "../firebase/propets-service";

const DeleteButton = ({posts, post_id, updateState}) => {

    const handleOnClick = async() => {
        const data = posts.filter((post) => post.post_id !== post_id);
        await updateState(data,'posts');
        await updateInfo(data.reverse(),'feedLF','mainFeed','feed_array');
    };

    return (
        <button onClick={handleOnClick}>Delete this post</button>
    );
};

export default DeleteButton;