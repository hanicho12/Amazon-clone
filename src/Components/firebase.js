import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDYc0ns5SgjXJjWW2F9lRiFaeGjY_R8h3k",
    authDomain: "app-85e81.firebaseapp.com",
    projectId: "app-85e81",
    storageBucket: "app-85e81.appspot.com",
    messagingSenderId: "665621580213",
    appId: "1:665621580213:web:2cfa59fec35b94a27d31fc"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };