import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMDsqEo287mwbTG0sko5kIJRK38lJF8Ts",
  authDomain: "ubereats-project.firebaseapp.com",
  projectId: "ubereats-project",
  storageBucket: "ubereats-project.appspot.com",
  messagingSenderId: "650712139089",
  appId: "1:650712139089:web:997dd26382a66b618b7f70",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const firestore = firebase.firestore();
const auth = firebase.auth();
export { auth };
export { firestore };
