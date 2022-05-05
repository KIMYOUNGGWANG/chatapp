import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApdCNeNelA_3S8MLTGWFgAg1rxwp3WfyY",
  authDomain: "chat-app-6814e.firebaseapp.com",
  projectId: "chat-app-6814e",
  storageBucket: "chat-app-6814e.appspot.com",
  messagingSenderId: "912635271833",
  appId: "1:912635271833:web:030ef3fc3d04297a1af608",
  measurementId: "G-7QYRWEJWG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
