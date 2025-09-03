import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDgDDH2TyowPU4jAFoTEvlSw44H-QyG2Nk",
    authDomain: "tsistvali.firebaseapp.com",
    projectId: "tsistvali",
    storageBucket: "tsistvali.firebasestorage.app",
    messagingSenderId: "834870295945",
    appId: "1:834870295945:web:3f654ae47099f9bb7eb558",
    measurementId: "G-FGS5H3RS0E"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
