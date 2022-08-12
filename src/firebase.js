import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyClyRPqkb-Upybl4fMHIYYD20aQ5Md98DE",
    authDomain: "challange1-db8ce.firebaseapp.com",
    projectId: "challange1-db8ce",
    storageBucket: "challange1-db8ce.appspot.com",
    messagingSenderId: "993667856839",
    appId: "1:993667856839:web:71d9b1453baeb189c641e2",
    measurementId: "G-40Q2T54TYE"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };