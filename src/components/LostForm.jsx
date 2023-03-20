//import style from
import profile from "../images/3b0045c9cc47b640ddcb43d6d06d1379.jpg"
import dropsite from "../images/Group 43.svg"
import upload from "../images/upload.png"
import React, {useState} from "react";
//import Navigation from "./Navigation";

const LostForm = () => {

    const [type, setType] = useState("Dog")
    const [sex, setSex] = useState("Male")
    const [breed, setBreed] = useState("")
    const [color, setColor] = useState("")
    const [height, setHeight] = "0-44"
    const [distinctive_features, setDistinctive_features] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [facebook_profile, setFacebook_profile] = useState("")

    const clickPublish = () => {
        console.log("state")
    };

    return(
            <div className="Lost_form">
                {/*<Navigation/>*/}
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
                    <select name="sex" id="sex">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    <label htmlFor="breed">Breed:</label>
                    <input type="text" id="breed" placeholder="Golden Retriever"/>
                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" placeholder="Beige"/>
                    <label htmlFor="height">Height:</label>
                    <select name="height" id="height">
                        <option value="0-44">0-44</option>
                        <option value="45-70">45-70</option>
                        <option value="71-100">71-100</option>
                    </select>
                    <label htmlFor="distinctive_features">Distinctive_features: up to 60 char</label>
                    <textarea id="distinctive_features" placeholder="blue collar with stars, no left ear, damaged tail"/>
                    <label htmlFor="description">Description: up to 100 char</label>
                    <textarea id="description"/>
                    <label htmlFor="location">Location:</label>
                    <textarea id="location" placeholder="Florentin street, Tel Aviv"/>
                    <br/>
                    <img src={dropsite} alt="default_photo"/>
                    <div className="Drag&drop">
                        <img src={upload} alt="upload"/>
                        <p>Drag and drop photos or</p>
                        <input type="file" name="Browse"/>
                        <textarea id="upload_list"/>
                    </div>
                    <div className="Contacts">
                        Contacts:
                        <input type="text" placeholder="Phone*"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Facebook profile"/>
                        <br/>
                        <img src={profile} alt="pfp"/>
                        <p>John Goodboi</p>
                        <input type="button" value="Publish" onClick={()=>clickPublish()}/>
                    </div>
                </div>
            </div>
        )
}

export default LostForm;