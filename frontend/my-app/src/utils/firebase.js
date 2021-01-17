import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// Firebase congif
  var firebaseConfig = {
    apiKey: "AIzaSyBFcxg6FoPSSCZ0E4bCQ0byYwi2p3lZ1gA",
    authDomain: "marketeer-f57fc.firebaseapp.com",
    projectId: "marketeer-f57fc",
    storageBucket: "marketeer-f57fc.appspot.com",
    messagingSenderId: "634917922190",
    appId: "1:634917922190:web:4f6c9e7f33adbf3b3670df"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
