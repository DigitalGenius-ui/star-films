import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8m97Q1ZrmCIOGtbM0b7p-2a4cEdX_Cfo",
  authDomain: "star-movies-9328e.firebaseapp.com",
  projectId: "star-movies-9328e",
  storageBucket: "star-movies-9328e.appspot.com",
  messagingSenderId: "232331295400",
  appId: "1:232331295400:web:5138da529e32ab6fef209d",
  measurementId: "G-MGQMMFGJNX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();