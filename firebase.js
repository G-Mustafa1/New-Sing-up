// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword ,signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCRCVJh3xEJWlAfRWs84QAnx8oSPKOdd4",
  authDomain: "ghulam-mustafa-50d0d.firebaseapp.com",
  projectId: "ghulam-mustafa-50d0d",
  storageBucket: "ghulam-mustafa-50d0d.appspot.com",
  messagingSenderId: "862111048332",
  appId: "1:862111048332:web:f34e989d8401842eb3d1a9",
  measurementId: "G-CHNG627ZXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
   app,
   auth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
}