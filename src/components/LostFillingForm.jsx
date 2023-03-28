import React, {useState} from 'react';
import LostForm from "./LostForm";
import Preview from "./Preview";

const LostFillingForm = () => {
    const [type, setType] = useState("dog")
    const [sex, setSex] = useState("male")
    const [breed, setBreed] = useState("")
    const [color, setColor] = useState("")
    const [height, setHeight] = useState("0-44")
    const [distinctive_features, setDistinctive_features] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    //const [photo, setPhoto] = useState([])
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [facebook_profile, setFacebook_profile] = useState("")

    const [preview, setPreview] = useState(false);

    const fields = {type, sex, breed, color, height, distinctive_features, description, location, phone, email, facebook_profile};
    const setters = {setType, setSex, setBreed, setColor, setHeight, setDistinctive_features, setDescription, setLocation, setPhone, setEmail, setFacebook_profile};

    const changePreview = () => {
        setPreview(!preview);
    }

    return preview ? <Preview changePreview={changePreview} fields={fields}/> :
            <LostForm changePreview={changePreview} setters={setters} fields={fields}/>
};

export default LostFillingForm;