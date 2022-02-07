import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyDtNgODiZTQNzwMU4Eq9r5mMdtVXnjlIp8",
    authDomain: "webstore-dcad2.firebaseapp.com",
    projectId: "webstore-dcad2",
    storageBucket: "webstore-dcad2.appspot.com",
    messagingSenderId: "804542000403",
    appId: "1:804542000403:web:92b03184a92548d240fee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)

export default fireDB