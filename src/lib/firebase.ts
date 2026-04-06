// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ABCz1f1O_lLP8O-jEWgGCTNd1kqXtaM",
  authDomain: "neurowmsx-76a8b.firebaseapp.com",
  projectId: "neurowmsx-76a8b",
  storageBucket: "neurowmsx-76a8b.firebasestorage.app",
  messagingSenderId: "476374380325",
  appId: "1:476374380325:web:f838ac38811277221574cc",
  measurementId: "G-87J69ZY9DQ"
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
