import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCD5GaG57k9YSJAI_FYoejwr2LDIphg-W0",
  authDomain: "fir-boilerplate-7e89c.firebaseapp.com",
  databaseURL: "https://fir-boilerplate-7e89c.firebaseio.com",
  projectId: "fir-boilerplate-7e89c",
  storageBucket: "fir-boilerplate-7e89c.appspot.com",
  messagingSenderId: "251460936337",
  appId: "1:251460936337:web:d5e4ce72646e8a5a855530",
  measurementId: "G-FB781HV55Z",
};

//initialise firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
