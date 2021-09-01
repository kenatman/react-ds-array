import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCcuKnQDeM3j7BG8RVecvjOoo5lOmIsBAM",
  authDomain: "business-card-maker-67419.firebaseapp.com",
  databaseURL: "https://business-card-maker-67419-default-rtdb.firebaseio.com",
  projectId: "business-card-maker-67419",
  storageBucket: "business-card-maker-67419.appspot.com",
  messagingSenderId: "885620821380",
  appId: "1:885620821380:web:22ac158bf064ad34bba1d1",
  measurementId: "G-KEWB272434",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
