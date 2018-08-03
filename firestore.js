import firebase from 'firebase'
require('firebase/app')
require('firebase/firestore')
require('firebase/auth')

async function googleLogin() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider()
    const response = await firebase.auth().signInWithPopup(provider)
    const user = response.user
    document.write(`Hello ${user.displayName}`)
    console.log(user)
  } catch (err) {
    console.log(err.message)
  }
}
//talk to Alexa about this

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
