import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyBWxgiKDbbeOpUCCFhPvUgKlXdxu3yDJtI",
  authDomain: "houses-71cae.firebaseapp.com",
  projectId: "houses-71cae",
  storageBucket: "houses-71cae.appspot.com",
  messagingSenderId: "719800020395",
  appId: "1:719800020395:web:8e477b37e6df1823d836ee",
  measurementId: "G-CPMVXLFJ0B",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
