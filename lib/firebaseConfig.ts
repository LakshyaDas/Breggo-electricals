// lib/firebaseConfig.ts
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHWfTjov3NKTnQjZq-L_EchacJKBsyZPA",
  authDomain: "review-115df.firebaseapp.com",
  projectId: "review-115df",
  storageBucket: "review-115df.firebasestorage.app",
  messagingSenderId: "902440314395",
  appId: "1:902440314395:web:d5ea914d07f4867493babe",
  measurementId: "G-RTW0N855EZ"
};

// Prevent reinitialization on hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
