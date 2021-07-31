import firebase from 'firebase' 

const firebaseConfig = {
  apiKey: "AIzaSyClkdt7I877ONUXe3tC_qJrDgnf4gle_YU",
  authDomain: "unichat-3587c.firebaseapp.com",
  projectId: "unichat-3587c",
  storageBucket: "unichat-3587c.appspot.com",
  messagingSenderId: "210865363963",
  appId: "1:210865363963:web:e9d2da2875d1b57795095e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;