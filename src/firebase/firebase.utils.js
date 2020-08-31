import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATjSx0b6MAKbvG7liKaH4jT_BxA5XbSIo",
  authDomain: "crwn-db-slim.firebaseapp.com",
  databaseURL: "https://crwn-db-slim.firebaseio.com",
  projectId: "crwn-db-slim",
  storageBucket: "crwn-db-slim.appspot.com",
  messagingSenderId: "15319665815",
  appId: "1:15319665815:web:a1b260e76d5e227af1add2",
  measurementId: "G-FQF4HK8J0B",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
