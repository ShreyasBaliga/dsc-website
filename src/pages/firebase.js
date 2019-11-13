import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

var firebaseConfig = {
  apiKey: "AIzaSyAmZWg_Jj7FOyHHRflVC2Balw0B-yI9Apc",
  authDomain: "cloud-messaging-b6180.firebaseapp.com",
  databaseURL: "https://cloud-messaging-b6180.firebaseio.com",
  projectId: "cloud-messaging-b6180",
  storageBucket: "cloud-messaging-b6180.appspot.com",
  messagingSenderId: "1066971066359",
  appId: "1:1066971066359:web:cc88bc752ee1135c1748f2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
