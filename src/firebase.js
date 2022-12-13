import firebase from "firebase";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD3GgBOjaVGy8exAIZJZtH5C9Tg4HURz_o",
  authDomain: "netflix-clone-fbe76.firebaseapp.com",
  projectId: "netflix-clone-fbe76",
  storageBucket: "netflix-clone-fbe76.appspot.com",
  messagingSenderId: "1074561489337",
  appId: "1:1074561489337:web:6e53c3be2e149bbc82be68"
};

const app = initializeApp(firebaseConfig)
const auth = firebase.auth();
export default auth;