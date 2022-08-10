// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3gvQw70bcNkLFQsB2tmFbbRi5QfPaFts",
  authDomain: "recording-project-41a98.firebaseapp.com",
  projectId: "recording-project-41a98",
  storageBucket: "recording-project-41a98.appspot.com",
  messagingSenderId: "752181697808",
  appId: "1:752181697808:web:9c2125a280d1ac89371995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)