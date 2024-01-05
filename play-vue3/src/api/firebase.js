import * as FIREBASE from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const Firestore = {
	db: {},
};

export function InitFirebaseApp() {
	const firebaseConfig = {
		apiKey: 'AIzaSyDbO2WSkMfZjdYYnF7UphxdiZh5va3pMdc',
		authDomain: 'play-vue3-5fafd.firebaseapp.com',
		projectId: 'play-vue3-5fafd',
		storageBucket: 'play-vue3-5fafd.appspot.com',
		messagingSenderId: '876469211366',
		appId: '1:876469211366:web:d5e96cc285128b443d6b27',
	};

	// // Initialize Firebase
	const fb = FIREBASE.initializeApp(firebaseConfig);
	const db = getFirestore(fb);

	Firestore.db = db;
}

export { Firestore };
