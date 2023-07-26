import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCnRAPR_IsE9HTmb706DE2yCp5jFBZhLq0",
    authDomain: "productos-a7341.firebaseapp.com",
    projectId: "productos-a7341",
    storageBucket: "productos-a7341.appspot.com",
    messagingSenderId: "580703049540",
    appId: "1:580703049540:web:5a6995c7da0aeaebace911",
    measurementId: "G-QWNH1Z6GZC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);