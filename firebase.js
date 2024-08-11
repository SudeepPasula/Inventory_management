// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp_l9nSlcHZgmfAqbrUIiDB2qgncR4rks",
  authDomain: "inventory-management-d8ee0.firebaseapp.com",
  projectId: "inventory-management-d8ee0",
  storageBucket: "inventory-management-d8ee0.appspot.com",
  messagingSenderId: "723106742624",
  appId: "1:723106742624:web:15956c0b47c3868156de05",
  measurementId: "G-7PS179JF0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore}