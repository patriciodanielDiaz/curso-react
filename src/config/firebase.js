import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs2h5LghigyIoQwkfAjqAehgfZrWNPwdI",
  authDomain: "ecommerce-patricio-diaz-utn.firebaseapp.com",
  projectId: "ecommerce-patricio-diaz-utn",
  storageBucket: "ecommerce-patricio-diaz-utn.firebasestorage.app",
  messagingSenderId: "853241213562",
  appId: "1:853241213562:web:f4762d1a7a668573acc1c3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };