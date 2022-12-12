import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDJ_JRuiD9tm4urdsTC2lCYQnGwqT91rfk",
    authDomain: "iud-directory-restaurant.firebaseapp.com",
    projectId: "iud-directory-restaurant",
    storageBucket: "iud-directory-restaurant.appspot.com",
    messagingSenderId: "901916760816",
    appId: "1:901916760816:web:99a44883a97e4637854035"
  };

  // Initialize Firebase
  const App = initializeApp(firebaseConfig);

  export const db = getFirestore(App);