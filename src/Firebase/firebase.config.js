// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm2LKieddbvgiShTlpRj7BvXjiqEvsNE4",
  authDomain: "login-form-f5cdf.firebaseapp.com",
  projectId: "login-form-f5cdf",
  storageBucket: "login-form-f5cdf.appspot.com",
  messagingSenderId: "689366942675",
  appId: "1:689366942675:web:6de1979229489f8ff2a526",
};

// Initialize Firebase
const initializeAuth = () => initializeApp(firebaseConfig);

export default initializeAuth;
