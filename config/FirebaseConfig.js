// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-schedular-3da3f.firebaseapp.com",
  projectId: "meeting-schedular-3da3f",
  storageBucket: "meeting-schedular-3da3f.appspot.com",
  messagingSenderId: "1089040075305",
  appId: "1:1089040075305:web:7918dc0b1388e5d59d6a38",
  measurementId: "G-2TPWWNZ3QR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
