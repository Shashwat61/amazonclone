import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCFDwYH8WHg5jtFZLp5Q5_r9Vzu5KiLLcA",
    authDomain: "clone-ba716.firebaseapp.com",
    projectId: "clone-ba716",
    storageBucket: "clone-ba716.appspot.com",
    messagingSenderId: "198184051912",
    appId: "1:198184051912:web:65b82d146291712d2331fd"
  };

  
const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db=firebase.firestore()

export default db;