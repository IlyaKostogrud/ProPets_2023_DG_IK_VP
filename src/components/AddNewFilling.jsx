import React, {useState} from 'react';
import AddNew from "./AddNew";

const AddNewFilling = () => {
    const [text, setText] = useState("")
    const [photos, setPhotos] = useState([])
    const [new_post, setNew_post] = useState(false)
    const fields = {text}
    const setters = {setText}

    const changePreview = () => {
        setNew_post(!new_post)
    }

    return
}