// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAm40tJjbrXPdIuq8OcUjffoqx-LWgaeQ",
  authDomain: "the-news-dragon-d6501.firebaseapp.com",
  projectId: "the-news-dragon-d6501",
  storageBucket: "the-news-dragon-d6501.appspot.com",
  messagingSenderId: "913503385293",
  appId: "1:913503385293:web:2db5b88c7288b457049b84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app