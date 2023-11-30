import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDv8j-fWXhC18M_nTbhUFeNmz6qihboc3U",
    authDomain: "tiara-jamil-wedding.firebaseapp.com",
    databaseURL: "https://tiara-jamil-wedding-default-rtdb.firebaseio.com",
    projectId: "tiara-jamil-wedding",
    storageBucket: "tiara-jamil-wedding.appspot.com",
    messagingSenderId: "891341353969",
    appId: "1:891341353969:web:755a606390fa9723eb8a50",
    measurementId: "G-M82KKLQNDV"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
export default database;