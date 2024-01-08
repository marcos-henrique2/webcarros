
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjwyoIwvjbWonq6f83okeCj718CrkD1pg",
  authDomain: "webcarros-d1ff1.firebaseapp.com",
  projectId: "webcarros-d1ff1",
  storageBucket: "webcarros-d1ff1.appspot.com",
  messagingSenderId: "568225406544",
  appId: "1:568225406544:web:3162d930edcf7a42bf3b55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {db, auth, storage};