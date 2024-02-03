// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1D1OcDqH2rmJrpUDGxku2ZeLUqyXfLAM",
  authDomain: "netflixgpt-b9ea8.firebaseapp.com",
  projectId: "netflixgpt-b9ea8",
  storageBucket: "netflixgpt-b9ea8.appspot.com",
  messagingSenderId: "495169512479",
  appId: "1:495169512479:web:9245a1d71c58e64138612a",
  measurementId: "G-H29V6J2PVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();