
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyXLM2YpHuHdEyg-hCM0inu0JIck1I5FM",
  authDomain: "webcarros-ae0d5.firebaseapp.com",
  projectId: "webcarros-ae0d5",
  storageBucket: "webcarros-ae0d5.appspot.com",
  messagingSenderId: "537639633322",
  appId: "1:537639633322:web:54a5ac561b849bd8b0abd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {db, auth, storage};