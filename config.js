import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBA26niBwX-zyAhXZhDBSGjuwlwGSj1ITg",
  authDomain: "blinbiostecla.firebaseapp.com",
  projectId: "blinbiostecla",
  storageBucket: "blinbiostecla.appspot.com",
  messagingSenderId: "843483057045",
  appId: "1:843483057045:web:e08f45cd00d6ec3df4c49c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
