import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg"
import dropsite from "../images/Group 43.svg"
import upload from "../images/upload.png"
import React, {useEffect} from "react";
import {drop, allowDrop} from "../utils/drag&drop"
import {lorem_ipsum} from "../utils/constants"

const FoundForm = ({setters, fields, changePreview}) => {

    useEffect(() => {
        if (fields.photo) {
            setters.setImageUrl(URL.createObjectURL(fields.photo));
        }
        else{
            setters.setImageUrl(dropsite)
        }
    }, [fields.photo]);

    return (
        <div className="Lost_form">
            <h1>Found a pet? Please complete the form to help.</h1>
            <form className="form_main">
                <label htmlFor="type">Type:</label>
                <select value={fields.type} name="type" id="type" onChange={(e) => setters.setType(e.target.value)}>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor="sex">Sex:</label>
                <select value={fields.sex} name="sex" id="sex" onChange={(e) => setters.setSex(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unknown">Unknown</option>
                </select>
                <label htmlFor="breed">Breed:</label>
                <input value={fields.breed} type="text" id="breed" placeholder="Golden Retriever"
                       onChange={(e) => setters.setBreed(e.target.value)}/>
                <label htmlFor="color">Color:</label>
                <input value={fields.color} type="text" id="color" placeholder="Beige" onChange={(e) => setters.setColor(e.target.value)}/>
                <label htmlFor="height">Height:</label>
                <select value={fields.height} name="height" id="height" onChange={(e) => setters.setHeight(e.target.value)}>
                    <option value="0-44">0-44</option>
                    <option value="45-70">45-70</option>
                    <option value="71-100">71-100</option>
                </select>
                <label htmlFor="distinctive_features">Distinctive_features: up to 60 char</label>
                <textarea value={fields.distinctive_features} id="distinctive_features" placeholder="blue collar with stars, no left ear, damaged tail"
                          onChange={(e) => setters.setDistinctive_features(e.target.value)}/>
                <label htmlFor="description">Description: up to 100 char</label>
                <textarea value={fields.description} id="description" placeholder={lorem_ipsum}
                          onChange={(e) => setters.setDescription(e.target.value)}/>
                <label htmlFor="location">Location:</label>
                <textarea value={fields.location} id="location" placeholder="Florentin street, Tel Aviv"
                          onChange={(e) => setters.setLocation(e.target.value)}/>
                <br/>
                <img src={fields.imageUrl} id="pic" alt="new_photo" onDrop={() => drop()} onDragOver={() => allowDrop()}/>
                    <div className="Drag&drop">
                        <img src={upload} alt="upload"/>
                        <p>Drag and drop photos or</p>
                        <input accept="image/*" multiple type="file" name="Browse[]" id="file" onChange={
                            (e) => {
                                document.getElementById("upload_list").value += e.target.files[0].name + "\n"
                                setters.setPhoto(e.target.files[0])
                            }
                        }/>
                        <textarea id="upload_list"/>
                    </div>
                <div className="Contacts">
                    Contacts:
                    <input value={fields.phone} type="text" placeholder="Phone*" onChange={(e) => setters.setPhone(e.target.value)}/>
                    <input value={fields.email} type="text" placeholder="Email" onChange={(e) => setters.setEmail(e.target.value)}/>
                    <input value={fields.facebook_profile} type="text" placeholder="Facebook profile"
                           onChange={(e) => setters.setFacebook_profile(e.target.value)}/>
                    <br/>
                    <img src={profile} alt="pfp"/>
                    <p>John Goodboi</p>
                    <input type="submit" value="Publish" onClick={() => changePreview()}/>
                </div>
            </form>
        </div>
    )
}

export default FoundForm;