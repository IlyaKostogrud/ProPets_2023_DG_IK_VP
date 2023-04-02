import React from 'react';
import {updateInfo} from "../firebase/propets-service";

const DeleteButton = ({posts, post_id}) => {

    const handleOnClick = async() => {
        const temp = posts.filter((post) => post.post_id !== post_id);
        await updateInfo(temp,'feedLF','mainFeed','feed_array');
    };

    return (
        <button onClick={handleOnClick}>Delete this post</button>
    );
};

export default DeleteButton;