import firebase from 'firebase'
import firebaseConfig from './assets/firebase.json'

firebase.initializeApp(firebaseConfig)
const db = firebase.database()

export default db
