import firebase from 'firebase'
require('firebase/app')
require('firebase/firestore')
require('firebase/auth')

var config = {
  apiKey: 'AIzaSyD9ZvTDovfkv-CJNaEQgzkkKQeXorkvrSU',
  authDomain: 'stackathon-tracker.firebaseapp.com',
  databaseURL: 'https://stackathon-tracker.firebaseio.com',
  projectId: 'stackathon-tracker',
  storageBucket: 'stackathon-tracker.appspot.com',
  messagingSenderId: '758234593434'
}
firebase.initializeApp(config)

var db = firebase.firestore()

export default db
