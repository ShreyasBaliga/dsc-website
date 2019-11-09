import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAuCDOZL_28Xh52pNg6rzWiU1gKG0Yxyyk",
  authDomain: "hellofirebase-70991.firebaseapp.com",
  databaseURL: "https://hellofirebase-70991.firebaseio.com",
  projectId: "hellofirebase-70991",
  storageBucket: "hellofirebase-70991.appspot.com",
  messagingSenderId: "411605218476",
  appId: "1:411605218476:web:c5998e75d958c8ce0c1b09"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
