import * as app from 'firebase-admin';

const serviceAccount = require('../../play-vue3-5fafd-firebase-adminsdk-49bjd-d06fa73be7.json');
const databaseURL = 'https://play-vue3-5fafd.firebaseio.com';
const storageBucket = 'play-vue3-5fafd.appspot.com';

//const conf = {
  // apiKey: 'AIzaSyDbO2WSkMfZjdYYnF7UphxdiZh5va3pMdc',
  // authDomain: 'play-vue3-5fafd.firebaseapp.com',
  // projectId: 'play-vue3-5fafd',
  // storageBucket: 'play-vue3-5fafd.appspot.com',
  // messagingSenderId: '876469211366',
  // appId: '1:876469211366:web:d5e96cc285128b443d6b27',
//}

app.initializeApp({
  credential: app.credential.cert(serviceAccount),
  databaseURL: databaseURL,
  storageBucket: storageBucket
});

const auth = app.auth();
const db = app.firestore();

export {auth}
export {db}