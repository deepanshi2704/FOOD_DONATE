import { initializeApp } from 'firebase/app';
//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import { 
  //function which initialize the firestore services on the frontend
  getFirestore, collection, getDocs
  } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCTViOzJK2p3BFzWt5H_dKxtxPgjI0iLfI",
  authDomain: "fwm-f3681.firebaseapp.com",
  projectId: "fwm-f3681",
  storageBucket: "fwm-f3681.appspot.com",
  messagingSenderId: "1054895043620",
  appId: "1:1054895043620:web:a85b9fb4d3289ba4bc94b1"
};

//init firebase app
const app = initializeApp(firebaseConfig)

//init services
  const db = getFirestore()

//collection ref
  const colRef = collection(db , 'first')

//get collection data
  getDocs(colRef)
    .then((snapshot) => {
     // console.log(snapshot)
      let first = []
      snapshot.docs.forEach((doc) => {
        first.push({ ...doc.data(), id: doc.id})
      })
      console.log(first)
    })
    .catch(err => {
      console.log(err.message)
    })