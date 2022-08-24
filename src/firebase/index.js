import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBNH5e0rFBPRhvys2cZLqvxb5x66YTN8DE",
    authDomain: "nits-paper.firebaseapp.com",
    projectId: "nits-paper",
    storageBucket: "nits-paper.appspot.com",
    messagingSenderId: "570373861187",
    appId: "1:570373861187:web:d3a93ec179b2e165f1c9f6",
    measurementId: "G-VM4XHRLTBX"
};

// Initialize Firebase
initializeApp(firebaseConfig);

console.log('%cFirebase initialised in the porject', 'color : green')