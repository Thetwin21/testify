// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOukIRrLYE4-lSXaQNw6Rs2Dh3zkgBY88",
  authDomain: "testify-bb944.firebaseapp.com",
  projectId: "testify-bb944",
  storageBucket: "testify-bb944.appspot.com",
  messagingSenderId: "539788582044",
  appId: "1:539788582044:web:e084832f29699258582159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

export { auth, googleProvider , db};