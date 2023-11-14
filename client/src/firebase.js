// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5c1cd.firebaseapp.com",
  projectId: "mern-estate-5c1cd",
  storageBucket: "mern-estate-5c1cd.appspot.com",
  messagingSenderId: "795084456675",
  appId: "1:795084456675:web:869f14372731c98037bbd6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);