// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg77f7YNLL_QISy1z8ov3r2X6_GCHvel0",
    authDomain: "paul-s-capture.firebaseapp.com",
    projectId: "paul-s-capture",
    storageBucket: "paul-s-capture.appspot.com",
    messagingSenderId: "644088417301",
    appId: "1:644088417301:web:56ea665279b775792c121c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;