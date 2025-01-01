// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDebgq_eOLvM0QHQ8qsDsCmhvvf_roNeVk",
  authDomain: "securitymanagement-b0d8c.firebaseapp.com",
  projectId: "securitymanagement-b0d8c",
  storageBucket: "securitymanagement-b0d8c.firebasestorage.app",
  messagingSenderId: "511687821192",
  appId: "1:511687821192:web:092f8e08c27a8958a35c3d",
  measurementId: "G-FZDRMC0RWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
