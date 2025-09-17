// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generator-6e853.firebaseapp.com",
  projectId: "ai-course-generator-6e853",
  storageBucket: "ai-course-generator-6e853.firebasestorage.app",
  messagingSenderId: "54299403273",
  appId: "1:54299403273:web:e49cc8f8257248a8ca04d8",
  measurementId: "G-07910Q66ZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
