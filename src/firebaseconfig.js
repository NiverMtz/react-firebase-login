import firebase from "firebase";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJe9ADWwW8y-SOPoFdjBQ4wMPyqP0Lu0g",
    authDomain: "login-react-5f424.firebaseapp.com",
    projectId: "login-react-5f424",
    storageBucket: "login-react-5f424.appspot.com",
    messagingSenderId: "781441320166",
    appId: "1:781441320166:web:dc996df1a09250f51ca727",
    measurementId: "G-231XKRJYN0"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
const auth = fire.auth();

export {auth};
