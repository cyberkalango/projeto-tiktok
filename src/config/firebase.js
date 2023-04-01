import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBjn2REM1Xf5QOrO6r8uzYIjqy_0xUUaGE",
  authDomain: "projeto-tiktok-36baf.firebaseapp.com",
  projectId: "projeto-tiktok-36baf",
  storageBucket: "projeto-tiktok-36baf.appspot.com",
  messagingSenderId: "176070039020",
  appId: "1:176070039020:web:e735861ea568790cbd1cc9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
