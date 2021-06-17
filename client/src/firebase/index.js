import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

const app = firebase.initializeApp({

    apiKey: "AIzaSyAb9wggYPPj3lkp53lqtBNCi8N-G_M89vI",
    authDomain: "ecommerce-restaurant.firebaseapp.com",
    projectId: "ecommerce-restaurant",
    storageBucket: "ecommerce-restaurant.appspot.com",
    messagingSenderId: "383301339765",
    appId: "1:383301339765:web:09bbd5f061455b8357863c"

});


const storage = firebase.storage();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export default app;

export { storage, firebase, googleAuthProvider,facebookAuthProvider };
