
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"; // add this line

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_KEY,  //add REACT_APP_FB_KEY to env file and assign key as a string. NO SPACING.
  authDomain: "tracker-7b7c5.firebaseapp.com",
  projectId: "tracker-7b7c5",
  storageBucket: "tracker-7b7c5.appspot.com",
  messagingSenderId: "593011807789",
  appId: "1:593011807789:web:02a1f0ddb3d3ec5e3f0aa4",
  measurementId: "G-LXWL9L1LP9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);   // add this line, this allows reference to the database using db as the name.