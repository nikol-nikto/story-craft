// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOwt72oziIpzy7TS0LGQ2fc0OVkl1aSII",
  authDomain: "storycraft-nikol.firebaseapp.com",
  projectId: "storycraft-nikol",
  storageBucket: "storycraft-nikol.firebasestorage.app",
  messagingSenderId: "383580928589",
  appId: "1:383580928589:web:f6036d89d6902c06a07a04",
  measurementId: "G-ELYXEJQ1XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);