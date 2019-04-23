import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "1030611800461284",
    authDomain: "dezigntool.firebaseapp.com",
    databaseURL: "https://dezigntool.firebaseio.com",
    // projectId: "dezigntool",
    storageBucket: "dezigntool.appspot.com"
    // messagingSenderId: "dezigntool"
  });
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase;
