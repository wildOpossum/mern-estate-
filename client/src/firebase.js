// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1d901.firebaseapp.com",
  projectId: "mern-estate-1d901",
  storageBucket: "mern-estate-1d901.firebasestorage.app",
  messagingSenderId: "676198390902",
  appId: "1:676198390902:web:a243de9592d84618dcd357"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);