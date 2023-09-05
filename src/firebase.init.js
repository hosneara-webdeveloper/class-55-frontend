// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2F1kylkDizjadKSP-rYFbgFBhFbdh2Vk",
  authDomain: "exam-product-account.firebaseapp.com",
  projectId: "exam-product-account",
  storageBucket: "exam-product-account.appspot.com",
  messagingSenderId: "780208331232",
  appId: "1:780208331232:web:0a7c2dc06aace074dbf385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;