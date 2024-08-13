// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "truehome-mernproject.firebaseapp.com",
  projectId: "truehome-mernproject",
  storageBucket: "truehome-mernproject.appspot.com",
  messagingSenderId: "922936053331",
  appId: "1:922936053331:web:cf37b144ab0be4f3c080a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);