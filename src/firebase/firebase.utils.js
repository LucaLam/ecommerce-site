import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAC9UVi6TB2dsO1ywuFVViHw5YB51yoR8Q",
    authDomain: "ecommerce-c8a82.firebaseapp.com",
    databaseURL: "https://ecommerce-c8a82.firebaseio.com",
    projectId: "ecommerce-c8a82",
    storageBucket: "ecommerce-c8a82.appspot.com",
    messagingSenderId: "1036919763289",
    appId: "1:1036919763289:web:b794b96d5942fa4462dc48"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();

if(!snapShot.exists){ //if there isn't data, create a new user
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{
        await userRef.set({
            displayName, 
            email,
            createdAt,
            ...additionalData
        })
    } catch (error) {
        console.log('error creating user', error.message)
    }
}

return userRef;

console.log(snapShot)
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); //triggers google pop-up for auth and sign in
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;


