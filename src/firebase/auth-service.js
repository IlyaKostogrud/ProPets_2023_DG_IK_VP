import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from './firebase-config';

export function registration(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).catch(error => error);
}

export function loginFBase(email,password){
    return signInWithEmailAndPassword(auth, email, password).catch(error => error);
}

export function logout(){
    signOut(auth).catch(error => console.log(error));
}