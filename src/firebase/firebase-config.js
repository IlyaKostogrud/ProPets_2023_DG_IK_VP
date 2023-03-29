import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDkvkVvwhxwwo1-rlZ3WfuAYywXOQjyJfo",
    authDomain: "masa-gkp-propets.firebaseapp.com",
    projectId: "masa-gkp-propets",
    storageBucket: "masa-gkp-propets.appspot.com",
    messagingSenderId: "772388566260",
    appId: "1:772388566260:web:27339cbd623dbe5eea1aa1",
    measurementId: "G-EL2TJHKYGS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
