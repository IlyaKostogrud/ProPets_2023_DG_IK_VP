import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {db, storage} from "./firebase-config";
import {doc, setDoc, getDoc, updateDoc, arrayUnion} from "firebase/firestore"
import {getUid} from "./auth-service";

export const addUserToDB = async (name, email) => {
    const avatar_url = await getDefaultAvatarURL();
    const uid = await getUid()
    const ref = doc(db, 'users', uid);
    await setDoc(ref, {
        name,
        email,
        tel_number: '000-000-00-00',
        fb_link: '',
        avatar_url
    });
};

export const getInfo = async (db_path, db_id) => {
    const ref = doc(db, db_path, db_id);
    const temp = await getDoc(ref);
    return temp.data();
}

export const addInfo = async (new_post, db_path, db_id, db_field) => {
    const ref = doc(db, db_path, db_id);
    const temp = await getDoc(ref);
    if (temp.exists())
        await updateDoc(ref, {[db_field]: arrayUnion(new_post)});
    else
        await setDoc(ref, {[db_field]: [new_post]})
}

export const uploadImage = async (file, user_id, file_name) => {
    const storageRef = ref(storage, `users/${user_id}/images/${file_name}`)
    await uploadBytes(storageRef, file)
        .catch(error => error);
}

export const getDefaultAvatarURL = async () => {
    return await getDownloadURL(ref(storage, 'images/default-avatar.png'))
        .catch(error => error);
};

export const getImage = async (user_id, file_name) => {
    return await getDownloadURL(ref(storage, `users/${user_id}/images/${file_name}`))
        .catch(error => error);
}