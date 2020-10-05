import firebase from 'firebase/app'

require("firebase/auth")
require("firebase/firestore")
require("firebase/storage")
require("firebase/functions")

var firebaseConfig = {
  apiKey: "AIzaSyCPxwkrJZv5lBFhK85qs95TAx59Qdga9lE",
  authDomain: "test-facbd.firebaseapp.com",
  databaseURL: "https://test-facbd.firebaseio.com",
  projectId: "test-facbd",
  storageBucket: "test-facbd.appspot.com",
  messagingSenderId: "873278554468",
  appId: "1:873278554468:web:fc621c7a8107605c997a71"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth()
const db=firebase.firestore()
const storage=firebase.storage()
const functions=firebase.functions()

export{
  firebase,
  auth,
  db,
  storage,
  functions
}