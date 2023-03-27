import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg"
import dropsite from "../images/Group 43.svg"
import upload from "../images/upload.png"
import React, {useState} from "react";
import {drop, allowDrop} from "../utils/drag&drop"
import {PREVIEW} from "../utils/constants"
import {changeDisplay} from "../store/mainDisplaySlice";
import {useDispatch} from "react-redux";

const LostForm = () => {
    const [type, setType] = useState("dog")
    const [sex, setSex] = useState("male")
    const [breed, setBreed] = useState("")
    const [color, setColor] = useState("")
    const [height, setHeight] = useState("0-44")
    const [distinctive_features, setDistinctive_features] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [photo, setPhoto] = useState([])
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [facebook_profile, setFacebook_profile] = useState("")

    const dispatch = useDispatch();

    return(
            <div className="Lost_form">
                <h1>Lost your buddy? Keep calm and complete the form</h1>
                <div className="form_main">
                    <label htmlFor="type">Type:</label>
                    <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="sex">Sex:</label>
                    <select name="sex" id="sex" onChange={(e) => setSex(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    <label htmlFor="breed">Breed:</label>
                    <input type="text" id="breed" placeholder="Golden Retriever" onChange={(e) => setBreed(e.target.value)}/>
                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" placeholder="Beige" onChange={(e) => setColor(e.target.value)}/>
                    <label htmlFor="height">Height:</label>
                    <select name="height" id="height" onChange={(e) => setHeight(e.target.value)}>
                        <option value="0-44">0-44</option>
                        <option value="45-70">45-70</option>
                        <option value="71-100">71-100</option>
                    </select>
                    <label htmlFor="distinctive_features">Distinctive_features: up to 60 char</label>
                    <textarea id="distinctive_features" placeholder="blue collar with stars, no left ear, damaged tail" onChange={(e) => setDistinctive_features(e.target.value)}/>
                    <label htmlFor="description">Description: up to 100 char</label>
                    <textarea id="description" onChange={(e) => setDescription(e.target.value)}/>
                    <label htmlFor="location">Location:</label>
                    <textarea id="location" placeholder="Florentin street, Tel Aviv" onChange={(e) => setLocation(e.target.value)}/>
                    <br/>
                    <img src={dropsite} id="pic" alt="default_photo" onDrop={() => drop()} onDragOver={() => allowDrop()} onChange={
                        (e) => {
                            setPhoto(e.target.value)
                            /*document.getElementById("upload_list").value += this.name*/
                        }
                    }/>
                    <div className="Drag&drop">
                        <img src={upload} alt="upload"/>
                        <p>Drag and drop photos or</p>
                        <input type="file" name="Browse" id="file" onClick={
                            () => {
                                let old_pic = document.getElementById("pic")
                                let new_pic = document.getElementById("file")
                                let text = old_pic.value.replace("C: \\fakepath\\", new_pic.value)
                            }
                        }/>
                        <textarea id="upload_list"/>
                    </div>
                    <div className="Contacts">
                        Contacts:
                        <input type="text" placeholder="Phone*" onChange={(e) => setPhone(e.target.value)}/>
                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" placeholder="Facebook profile" onChange={(e) => setFacebook_profile(e.target.value)}/>
                        <br/>
                        <img src={profile} alt="pfp"/>
                        <p>John Goodboi</p>
                        <input type="button" value="Publish" onClick={() => {
                            dispatch(changeDisplay(PREVIEW))
                        }
                        }/>
                    </div>
                </div>
            </div>
        )
}

export default LostForm;