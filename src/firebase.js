import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBc4bpPbGB3a2Hg7pS25hldCDRXNlBoP5U",
    authDomain: "slack-clone-da11a.firebaseapp.com",
    projectId: "slack-clone-da11a",
    storageBucket: "slack-clone-da11a.appspot.com",
    messagingSenderId: "203543720802",
    appId: "1:203543720802:web:fef126f56dc2e62af5323b",
    measurementId: "G-EBKHVZ9P1P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
