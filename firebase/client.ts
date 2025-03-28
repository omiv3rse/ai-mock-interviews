
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD2cOfobNhH5_cfFwyzi24cWAckdxqmdwA",
  authDomain: "prepwise-230d7.firebaseapp.com",
  projectId: "prepwise-230d7",
  storageBucket: "prepwise-230d7.firebasestorage.app",
  messagingSenderId: "1059997025847",
  appId: "1:1059997025847:web:068ff98f33eef02d1ae1b2",
  measurementId: "G-P2CFJRPYLL"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) :getApp();

export const auth =getAuth(app);
export const db = getFirestore(app)