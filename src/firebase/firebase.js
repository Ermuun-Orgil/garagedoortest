// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW2Jaik2o05AT3PpqJthBusSgw6qUVkqA",
  authDomain: "garagedoortest-f76c7.firebaseapp.com",
  projectId: "garagedoortest-f76c7",
  storageBucket: "garagedoortest-f76c7.appspot.com",
  messagingSenderId: "190191405077",
  appId: "1:190191405077:web:729a4f7b33a94eccd1661c",
  measurementId: "G-6W7J6R3G4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);