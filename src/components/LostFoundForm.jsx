import dropsite from "../images/Group 43.svg"
import upload from "../images/upload.png"
import React, {useEffect} from "react";
import {drop, allowDrop} from "../utils/drag&drop"
import {lorem_ipsum, preview_page} from "../utils/constants"
import {Link} from "react-router-dom";

const LostFoundForm = ({setters, fields, changePreview, name, avatar_url, header_text}) => {

    useEffect(() => {
        if (fields.photo) {
            setters.setImageUrl(URL.createObjectURL(fields.photo));
        } else {
            setters.setImageUrl(dropsite)
        }
    }, [fields.photo]);

    return (
        <div className="Lost_form">
            <h2>{header_text}</h2>
            <form className="form_main container">
                <div className={'row'}>
                    <div className={'col-7 lost-found-labels'}>
                        <div><label htmlFor="type">Type:</label>
                            <select value={fields.type} name="type" id="type" onChange={(e) => setters.setType(e.target.value)}>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="bird">Bird</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="sex">Sex:</label>
                            <select value={fields.sex} name="sex" id="sex" onChange={(e) => setters.setSex(e.target.value)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unknown">Unknown</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="breed">Breed:</label>
                            <input value={fields.breed} type="text" id="breed" placeholder="Golden Retriever"
                                   onChange={(e) => setters.setBreed(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="color">Color:</label>
                            <input value={fields.color} type="text" id="color" placeholder="Beige"
                                   onChange={(e) => setters.setColor(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="height">Height:</label>
                            <select value={fields.height} name="height" id="height"
                                    onChange={(e) => setters.setHeight(e.target.value)}>
                                <option value="0-44">0-44</option>
                                <option value="45-70">45-70</option>
                                <option value="71-100">71-100</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="distinctive_features">Distinctive features: up to 60 char</label>
                            <textarea value={fields.distinctive_features} id="distinctive_features"
                                      placeholder="blue collar with stars, no left ear, damaged tail"
                                      onChange={(e) => setters.setDistinctive_features(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="description">Description: up to 100 char</label>
                            <textarea value={fields.description} id="description" placeholder={lorem_ipsum}
                                      onChange={(e) => setters.setDescription(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="location">Location:</label>
                            <textarea value={fields.location} id="location" placeholder="Florentin street, Tel Aviv"
                                      onChange={(e) => setters.setLocation(e.target.value)}/>
                        </div>
                    </div>
                    <div className={'col-5'}>
                        <img className={'post-lost-found-image'} src={fields.imageUrl} id="pic" alt="new_photo" onDrop={() => drop()}
                             onDragOver={() => allowDrop()}/>
                        <div className="Drag&drop">
                            {/*<img src={upload} alt="upload"/>*/}
                            {/*<p>Drag and drop photos or</p>*/}
                            <input accept="image/*" type="file" name="Browse[]" id="file" onChange={
                                (e) => {
                                    document.getElementById("upload_list").value += e.target.files[0].name + "\n"
                                    setters.setPhoto(e.target.files[0])
                                }
                            }/>

                            <textarea id="upload_list" style={{display:'none'}}/>
                        </div>
                    </div>
                </div>

                <div className="Contacts">
                    Contacts:
                    <input value={fields.phone} type="text" placeholder="Phone*"
                           onChange={(e) => setters.setPhone(e.target.value)}/>
                    <input value={fields.email} type="text" placeholder="Email"
                           onChange={(e) => setters.setEmail(e.target.value)}/>
                    <input value={fields.facebook_profile} type="text" placeholder="Facebook profile"
                           onChange={(e) => setters.setFacebook_profile(e.target.value)}/>
                    <br/>
                    <img className={'author_avatar'} src={avatar_url} alt="pfp"/>
                    <p>{name}</p>
                    {/*<Link to={preview_page}>*/}
                    <input type="submit" value="Publish" onClick={() => changePreview()}/>
                    {/*</Link>*/}
                </div>
            </form>
        </div>
    )
}

export default LostFoundForm;