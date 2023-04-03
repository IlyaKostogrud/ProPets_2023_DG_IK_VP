import React from 'react';
import {updateInfo} from "../firebase/propets-service";

const DeleteButton = ({posts, post_id, updateState}) => {

    const handleOnClick = async() => {
        const temp = [...posts];
        const filtered = temp.filter((post) => post.post_id !== post_id);
        updateState(filtered,'posts');
        const to_send = [...filtered];
        await updateInfo(to_send.reverse(),'feedLF','mainFeed','feed_array');
    };

    return (
        <button onClick={handleOnClick}>Delete this post</button>
    );
};

export default DeleteButton;