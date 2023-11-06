// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGYTjTj8l0zQtj9NT3JVQGjX_ULrO2-9w",
  authDomain: "rhr-hotel-ade49.firebaseapp.com",
  projectId: "rhr-hotel-ade49",
  storageBucket: "rhr-hotel-ade49.appspot.com",
  messagingSenderId: "556665078630",
  appId: "1:556665078630:web:ffeb5dc388e2c459443ea7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
