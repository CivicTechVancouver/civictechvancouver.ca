import firebase from 'firebase/app'
import 'firebase/firestore'
const serviceAccount = require('~/../serviceAccountKey.json')

if (!firebase.apps.length) {
  firebase.initializeApp({
    ...serviceAccount
  })
}
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)
export { db }
