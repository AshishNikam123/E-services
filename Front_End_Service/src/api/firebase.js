
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn_eSs0nGcTtPb61x5Jz97ZZaiPUMxVwc",
  authDomain: "service-app-a4f95.firebaseapp.com",
  projectId: "service-app-a4f95",
  storageBucket: "service-app-a4f95.appspot.com",
  messagingSenderId: "588028539082",
  appId: "1:588028539082:web:23f4b2528da3f454140433"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
export const  auth=getAuth(app);
export default app;
