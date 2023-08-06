import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg0bX063et2e3Msitv_d7l-yZR1nABLSw",
  authDomain: "miniblog-42ee2.firebaseapp.com",
  projectId: "miniblog-42ee2",
  storageBucket: "miniblog-42ee2.appspot.com",
  messagingSenderId: "603154002186",
  appId: "1:603154002186:web:ced29a08f47c623d488af3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
