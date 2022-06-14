import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCt5FpSKaiAwoAQIkO9wbTH4fj7DddBDAc",
    authDomain: "fir-9b933.firebaseapp.com",
    projectId: "fir-9b933",
    storageBucket: "fir-9b933.appspot.com",
    messagingSenderId: "482314441341",
    appId: "1:482314441341:web:a94b0fb8094e3c54419714",
    measurementId: "G-NWQD2BLFCG"
  };

export default firebase.initializeApp(firebaseConfig)