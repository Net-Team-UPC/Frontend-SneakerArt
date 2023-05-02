// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIK5C1m6MVnR8mAc9Yno6I0-0LDmA6AQo",
    authDomain: "frontend-sneakerart.firebaseapp.com",
    projectId: "frontend-sneakerart",
    storageBucket: "frontend-sneakerart.appspot.com",
    messagingSenderId: "446601473412",
    appId: "1:446601473412:web:34955a43c3092612ddc1d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export {auth};