import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyl1Z30ZoGkk_nI-XXck1v052b7RhSwtw",
  authDomain: "bookingdata-d1f72.firebaseapp.com",
  projectId: "bookingdata-d1f72",
  storageBucket: "bookingdata-d1f72.firebasestorage.app",
  messagingSenderId: "664188260765",
  appId: "1:664188260765:web:3ef51278a4420bd3981f74",
  measurementId: "G-ZKY1XRD8QH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);