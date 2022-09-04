// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiexdd-TCELIyFx04sow-4XPg8ZdeHoNc",
  authDomain: "g-react-redux.firebaseapp.com",
  projectId: "g-react-redux",
  storageBucket: "g-react-redux.appspot.com",
  messagingSenderId: "445006510296",
  appId: "1:445006510296:web:795e45aef2d9410160ffad",
  measurementId: "G-WZQ5Q0168L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);