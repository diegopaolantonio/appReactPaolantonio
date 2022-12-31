import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCP6j1qWMgq5ntAn2rJPgfuSucsf-myL4M",
  authDomain: "appexperto-2022.firebaseapp.com",
  projectId: "appexperto-2022",
  storageBucket: "appexperto-2022.appspot.com",
  messagingSenderId: "1082634589289",
  appId: "1:1082634589289:web:594294801421e8614a3ef8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)