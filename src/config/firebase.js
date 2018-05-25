import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: process.env.FIREBASE_EMAIL,
    privateKey: process.env.FIREBASE_KEY,
    projectId: 'bot-crescer'
  }),
  databaseURL: 'https://bot-crescer.firebaseio.com'
});

const firestore = admin.firestore();

export default {firestore}