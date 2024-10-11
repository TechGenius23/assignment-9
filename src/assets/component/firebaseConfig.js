// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCisyuvYin-svr4hX-M_-cDwYyM1p0r4QA",
  authDomain: "assignment-504c8.firebaseapp.com",
  projectId: "assignment-504c8",
  storageBucket: "assignment-504c8.appspot.com",
  messagingSenderId: "91002099193",
  appId: "1:91002099193:web:34a9055fad178bbeb25928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth