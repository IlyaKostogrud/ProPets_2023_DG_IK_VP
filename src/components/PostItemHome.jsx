import React, {useEffect, useState} from 'react';
import {addInfo, getImageURL, getInfo, updateInfo} from "../firebase/propets-service";
import {path_users} from "../utils/constants";
import DeleteButton from "./DeleteButton";

const PostItemHome = (props) => {
    const [state, setState] = useState({
        picture_url: '',
        author_name: '',
        post_picture_url: '',
        star: false,
        user_owns: false
    });

    useEffect(() => {
        (async function () {
            const uid = props.post.post_author_id;
            const info = await getInfo(path_users, uid);
            const picture = await getImageURL(uid, props.post.post_pics[0]);
            const temp = props.favorites.includes(props.post.post_id);
            setState({
                picture_url: info.avatar_url,
                author_name: info.name,
                post_picture_url: picture,
                star: temp,
                user_owns: uid === sessionStorage.getItem('uid')
            });
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const date = new Date(props.post.post_date).toString();

    const handleOnClickStar = async () => {
        const temp = state.star;
        setState(prevState => ({...prevState, star: !temp}));
        const uid = sessionStorage.getItem('uid');
        if (temp) {
            const data = props.favorites.filter((id) => id !== props.post.post_id);
            props.updateState(data, 'favorites');
            await updateInfo(data, 'favorites', uid, 'fav_array');
        } else
            await addInfo(props.post.post_id, 'favorites', uid, 'fav_array');
    };

    return (
        <div className={'container post-home'}>
            <div className={'row post'}>
                <div className={'col-1 post-author-avatar'}>
                    <img className={'author_avatar'} src={state.picture_url} alt="post_author_avatar_url"/>
                </div>
                <div className={'col-11'}>
                    <div>
                        <h5><span className={'colored-text'}>{state.author_name}</span></h5>

                    </div>
                    <div className={'post_date'}>{date}</div>
                    <div className={'post-home-service-image-wrap'}>
                        <img src={state.post_picture_url} alt={'post'}/>
                    </div>
                    <div><span className={'colored-text'}>Text: </span>{props.post.post_text}</div>
                </div>
            </div>
            <div className={'row'}>
                <div className="favorite-star">
                    <span onClick={handleOnClickStar}>{state.star ? '★' : '☆'}</span>
                </div>
                <div>{state.user_owns && <DeleteButton updateState={props.updateState} posts={props.posts}
                                                       post_id={props.post.post_id}/>}</div>
            </div>
        </div>
    );
};

export default PostItemHome;