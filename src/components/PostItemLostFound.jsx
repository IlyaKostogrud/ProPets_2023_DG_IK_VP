import React, {useEffect, useState} from 'react';
import {addInfo, getImageURL, getInfo, updateInfo} from "../firebase/propets-service";
import {path_users} from "../utils/constants";
import DeleteButton from "./DeleteButton";

const PostItemLostFound = (props) => {
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
            const data = [props.favorites.filter((id) => id !== props.post.post_id)];
            props.updateState(data);
            await updateInfo(data, 'favorites', uid, 'fav_array');
        } else
            await addInfo(props.post.post_id, 'favorites', uid, 'fav_array');
    };

    return (
        <div className={'container post-lost-found'}>
            <div className={'row post'}>
                <div className={'col-5 post-lost-found-image-wrap'}>
                    <img className={'post-lost-found-image'} src={state.post_picture_url} alt={'post'}/>
                </div>

                <div className={'col-7 container'}>
                    <div className={'row pet-type-breed colored-text'}>
                        <h3>({props.post.post_type}) {props.post.type}, {props.post.breed}</h3>
                    </div>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            <div><span className={'colored-text'}>Color: </span>{props.post.color}</div>
                            <div><span className={'colored-text'}>Sex: </span>{props.post.sex}</div>
                            <div><span className={'colored-text'}>Height: </span>{props.post.height}</div>
                        </div>
                        <div className={'col-8'}>
                            <p><span
                                className={'colored-text'}>Distinctive features: </span>{props.post.distinctive_features}
                            </p>
                        </div>
                    </div>

                    <br/>

                    <div className={'row'}>
                        <p><span className={'colored-text'}>Description: </span>{props.post.description}</p>
                    </div>

                    <div className={'row'}>
                        <p><span className={'colored-text'}>Location: </span>{props.post.location}</p>
                    </div>

                    <div className={'row post_date'}>
                        <p>{date}</p>
                    </div>

                    <div className={'row author-info'}>
                        <div className={'col-5'}>
                            <div className={'post-author-avatar'}>
                                <img className={'author_avatar'} src={state.picture_url} alt="post_author_avatar_url"/>
                            </div>
                            <h5>{state.author_name}</h5>
                        </div>
                        <div className={'col-7 author-contacts'}>
                            <div><span className={'colored-text'}>Phone: </span>{props.post.phone}</div>
                            <div><span className={'colored-text'}>E-mail: </span>{props.post.email}</div>
                            <div><span className={'colored-text'}>Facebook: </span>{props.post.facebook_profile}</div>
                        </div>
                    </div>
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

export default PostItemLostFound;