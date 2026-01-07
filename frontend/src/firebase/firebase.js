import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAyrLGtdTk6OKXaDiS42abNNa9b0y-cyd4",
  authDomain: "nannyservices-73739.firebaseapp.com",
  projectId: "nannyservices-73739",
  storageBucket: "nannyservices-73739.firebasestorage.app",
  messagingSenderId: "452038919804",
  appId: "1:452038919804:web:e8e6ed2c9a726f8d266bf9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
