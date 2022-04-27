// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM1_WBSNMNFc4H_4yp7w7TwyNsbuj-r-8",
  authDomain: "ecommerce31145-e3c15.firebaseapp.com",
  projectId: "ecommerce31145-e3c15",
  storageBucket: "ecommerce31145-e3c15.appspot.com",
  messagingSenderId: "413236283640",
  appId: "1:413236283640:web:72264e2a33905b6983d30d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)