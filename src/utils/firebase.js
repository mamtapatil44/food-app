
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBdAkJDFz9W4qKfFxzwK33l7eLHdmfQP6c",
authDomain: "moms-food-9d0e6.firebaseapp.com",
projectId: "moms-food-9d0e6",
storageBucket: "moms-food-9d0e6.appspot.com",
messagingSenderId: "711164041801",
appId: "1:711164041801:web:5560d0450f8e3f5ce1bd98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();