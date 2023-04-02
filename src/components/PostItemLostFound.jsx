import React, {useEffect, useState} from 'react';
import {addInfo, getImageURL, getInfo, updateInfo} from "../firebase/propets-service";
import {path_users} from "../utils/constants";

const PostItemLostFound = (props) => {
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
        if (temp) {
            const data = [props.favorites.filter((id) => id !== props.post.post_id)];
            props.updateFavorites(data);
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
                    <div className={'row pet-type-breed'}>
                        <h3>{props.post.type}, {props.post.breed}</h3>
                    </div>

                    <div className={'row'}>
                        <div className={'col-4'}>
                            <div>Color: {props.post.color}</div>
                            <div>Sex: {props.post.sex}</div>
                            <div>Height: {props.post.height}</div>
                        </div>
                        <div className={'col-8'}>
                            <p>Distinctive features: {props.post.distinctive_features}</p>
                        </div>
                    </div>

                    <br/>

                    <div className={'row'}>
                        <p>Description: {props.post.description}</p>
                    </div>

                    <div className={'row'}>
                        <p>Location: {props.post.location}</p>
                    </div>

                    <div className={'row post_date'}>
                        <p>{date}</p>
                    </div>

                    <div className={'row author-info'}>
                        <div className={'col-5'}>
                            <div className={'post-author-avatar'}>
                                <img className={'author_avatar'} src={state.picture_url} alt="post_author_avatar_url"/>
                            </div>
                            <p>{state.author_name}</p>
                        </div>
                        <div className={'col-7 author-contacts'}>
                            <div>Phone: {props.post.phone}</div>
                            <div>E-mail: {props.post.email}</div>
                            <div>Facebook: {props.post.facebook_profile}</div>
                        </div>
                    </div>
                </div>

                <div className="favorite-star">
                    <span onClick={handleOnClickStar}>{state.star ? '★' : '☆'}</span>
                </div>
            </div>
        </div>
    );
};

export default PostItemLostFound;