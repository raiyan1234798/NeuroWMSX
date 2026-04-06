// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4aBg-vTWxA2_iUI_lCeQLy87tRvF9LiM",
  authDomain: "neurowmsx-f88d3.firebaseapp.com",
  projectId: "neurowmsx-f88d3",
  storageBucket: "neurowmsx-f88d3.firebasestorage.app",
  messagingSenderId: "622068384238",
  appId: "1:622068384238:web:5e1c01e3686e5580a28eff",
  measurementId: "G-W3RYCGLG6M"
};

// Initialize Firebase (safely handling Next.js SSR)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore Database
export const db = getFirestore(app);

// Initialize Analytics (only available on the client-side browser)
export const analytics = typeof window !== "undefined"
  ? isSupported().then((supported) => supported ? getAnalytics(app) : null)
  : null;

export default app;
