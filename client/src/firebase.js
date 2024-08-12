// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "truehome-mern-project.firebaseapp.com",
  projectId: "truehome-mern-project",
  storageBucket: "truehome-mern-project.appspot.com",
  messagingSenderId: "524476088755",
  appId: "1:524476088755:web:f9e70dda979e8964c54bc6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);