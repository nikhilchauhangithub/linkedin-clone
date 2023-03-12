import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-of170lgAPIWycpJvdaMJDJdUVOu_Px8",
  authDomain: "linkedin-c3a01.firebaseapp.com",
  projectId: "linkedin-c3a01",
  storageBucket: "linkedin-c3a01.appspot.com",
  messagingSenderId: "1039053552460",
  appId: "1:1039053552460:web:667ae09a459baaeb2a6de9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
