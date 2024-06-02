// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7iCsPh0R1EWZJfLHXlRcsEzPAR2gtg38",
  authDomain: "netflixgpt-857f1.firebaseapp.com",
  projectId: "netflixgpt-857f1",
  storageBucket: "netflixgpt-857f1.appspot.com",
  messagingSenderId: "256033230342",
  appId: "1:256033230342:web:66ab04b7fb90bd3839bd87",
  measurementId: "G-3YW75TNSMF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
