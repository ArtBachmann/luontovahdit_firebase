import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBe-ZSfwGypMEu8vrZMm7uyyIKUeOaYXVk",
  authDomain: "react-firebase-ae59e.firebaseapp.com",
  databaseURL: "https://react-firebase-ae59e.firebaseio.com",
  projectId: "react-firebase-ae59e",
  storageBucket: "react-firebase-ae59e.appspot.com",
  messagingSenderId: "1010195202229"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase