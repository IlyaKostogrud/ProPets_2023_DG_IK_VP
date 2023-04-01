import React, {useEffect, useState} from 'react';
import {addInfo, getImageURL, getInfo, updateInfo} from "../firebase/propets-service";
import {path_users} from "../utils/constants";

const PostItemHome = (props) => {
    const [state, setState] = useState({
        picture_url: '',
        author_name: '',
        post_picture_url: '',
        star: false
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
                star: temp
            });
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const date = new Date(props.post.post_date).toString();

    const handleOnClickStar = async () => {
        const temp = state.star;
        setState(prevState => ({...prevState, star: !temp}));
        const uid = sessionStorage.getItem('uid');
        if(temp){
            const data = [props.favorites.filter((id)=> id !== props.post.post_id)];
            props.updateFavorites(data);
            await updateInfo(data,'favorites',uid,'fav_array');
        }
        else
            await addInfo(props.post.post_id,'favorites',uid,'fav_array');
    };

    return (
        <div className={'container post-home'}>
            <div className={'row post'}>
                <div className={'col-1 post-author-avatar'}>
                    <img className={'author_avatar'} src={state.picture_url} alt="post_author_avatar_url"/>
                </div>
                <div className={'col-10'}>
                    <div>{state.author_name}</div>
                    <div className={'post_date'}>{date}</div>
                    <div className={'post-image'}>
                        <img src={state.post_picture_url} alt={'post'}/>
                    </div>
                    <div>Text: {props.post.post_text}</div>
                </div>
                <div className={'col-1 post-menu-buttons'}>
                    post-menu-buttons
                </div>
                <div className="favorite-star">
                    <span onClick={handleOnClickStar}>{state.star ? '★' : '☆'}</span>
                </div>
            </div>
        </div>
    );
};

export default PostItemHome;