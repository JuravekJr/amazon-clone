import * as firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCp5lkzIM29sbkMC_ZxGvlkEIh6JWX_Qfk",
    authDomain: "clone-5c3fc.firebaseapp.com",
    projectId: "clone-5c3fc",
    storageBucket: "clone-5c3fc.appspot.com",
    messagingSenderId: "261637337479",
    appId: "1:261637337479:web:a0ba1b5e7fda4372d3e322",
    measurementId: "G-DHG6RBKR9S"
};

const app = firebase.initializeApp(firebaseConfig)
const auth = app.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider();
const db = app.firestore()


export {auth, googleProvider, db, firebase};





