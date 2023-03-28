import {getDownloadURL, ref} from "firebase/storage";
import {db, storage} from "./firebase-config";
import {doc, setDoc, getDoc} from "firebase/firestore"
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

export const getUserInfo = async (uid) =>{
    const ref = doc(db, 'users', uid);
    const temp = await getDoc(ref);
    return temp.data();
}

export const getDefaultAvatarURL = async () => {
    return await getDownloadURL(ref(storage, 'images/default-avatar.png'))
        .catch(error => error);
};

