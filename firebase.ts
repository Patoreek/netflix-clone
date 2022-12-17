// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9b0xitFJg8MOT2kLc17j9N6o8VEXSXR0",
    authDomain: "netflix-clone-121ba.firebaseapp.com",
    projectId: "netflix-clone-121ba",
    storageBucket: "netflix-clone-121ba.appspot.com",
    messagingSenderId: "153722593943",
    appId: "1:153722593943:web:f26682d39ff4e44e24ffd2",
    measurementId: "G-VR8RS8RHZH"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }