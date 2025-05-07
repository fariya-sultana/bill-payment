// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDamcFCWgnAOZTFiMc24PYrWBXg4-xfw5o",
  authDomain: "online-bill-payment-a9.firebaseapp.com",
  projectId: "online-bill-payment-a9",
  storageBucket: "online-bill-payment-a9.firebasestorage.app",
  messagingSenderId: "720229596363",
  appId: "1:720229596363:web:8485c3ce44fe9a6fc9ef4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;