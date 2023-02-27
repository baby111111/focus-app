
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyBOYH8eVVBNDV5eSTNfUW_xsytIGcCQK5g",
  authDomain: "exercise-1ec6e.firebaseapp.com",
  projectId: "exercise-1ec6e",
  storageBucket: "exercise-1ec6e.appspot.com",
  messagingSenderId: "840233630035",
  appId: "1:840233630035:web:c39b41dacf5419a93109a6",
  measurementId: "G-V1LFBE46CG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)