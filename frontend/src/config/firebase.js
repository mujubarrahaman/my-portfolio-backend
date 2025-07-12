import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDLsctZM6Fww5xngaHNjPmCSqOCEWcnzmc",
  authDomain: "blog-project-9f0af.firebaseapp.com",
  projectId: "blog-project-9f0af",
  storageBucket: "blog-project-9f0af.firebasestorage.app",
  messagingSenderId: "311904640392",
  appId: "1:311904640392:web:7afa2944c786f626572e3d",
  measurementId: "G-E3QQYPWG1S"
};


const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)

 export default auth