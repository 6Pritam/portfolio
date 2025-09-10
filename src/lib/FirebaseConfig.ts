// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNyGZ6mu2jWM9jNe7tAzXj-0dY7g0SMg0",
  authDomain: "portfolioproject-e6dac.firebaseapp.com",
  projectId: "portfolioproject-e6dac",
  storageBucket: "portfolioproject-e6dac.firebasestorage.app",
  messagingSenderId: "524753326486",
  appId: "1:524753326486:web:1a1f877701a03e0d20cdb7",
  measurementId: "G-W7SRN7NWHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

