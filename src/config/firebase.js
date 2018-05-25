const admin = require('firebase-admin');

const serviceAccount = require('./firebase-key.json');

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://bot-crescer.firebaseio.com'
});

const firestore = admin.firestore();

export default {firestore}