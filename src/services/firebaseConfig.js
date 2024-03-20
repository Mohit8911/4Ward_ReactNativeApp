// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBytv1rQYAemgepWrv7FFmlQ6wCkvTeLAU",
  authDomain: "fourward-426c5.firebaseapp.com",
  projectId: "fourward-426c5",
  storageBucket: "fourward-426c5.appspot.com",
  messagingSenderId: "672875436219",
  appId: "1:672875436219:web:aaa76351fd51e88ec2b19e",
  measurementId: "G-2B2ZDC2J66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app };
