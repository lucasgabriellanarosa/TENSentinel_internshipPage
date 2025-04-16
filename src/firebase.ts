import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5up-4zB8TWZ_5um39RKRzm7W_FpZBJiI",
  authDomain: "ten-internship-769fa.firebaseapp.com",
  databaseURL: "https://ten-internship-769fa-default-rtdb.firebaseio.com",
  projectId: "ten-internship-769fa",
  storageBucket: "ten-internship-769fa.firebasestorage.app",
  messagingSenderId: "235998495446",
  appId: "1:235998495446:web:5788b98b82ebf7e204ff77",
  measurementId: "G-RKY7FWE314"
};

export const app = initializeApp(firebaseConfig);