// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCdQ7ZZulb-zEfZ0yHCUQMmW-EtRLA5tow",
  authDomain: "pittt-react.firebaseapp.com",
  projectId: "pittt-react",
  storageBucket: "pittt-react.appspot.com",
  messagingSenderId: "636538762725",
  appId: "1:636538762725:web:16c7a2c46dfbab1b18eb0c",
  measurementId: "G-8HBYJYPKB2"
};

const app = firebase.initializeApp(firebaseConfig);

export default function getFirestore() {
    return firebase.firestore(app)
}

