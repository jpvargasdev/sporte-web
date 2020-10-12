import firebase from 'firebase/app';
import '@firebase/database';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/analytics';

let firebaseInstance = null;

const getFirebase = () => {
  if (firebaseInstance != null) return firebaseInstance;
  try {
    const config = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    };
    firebase.initializeApp(config);
  } catch (error) {
    /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
    if (!/already exists/u.test(error.message)) {
      // eslint-disable-next-line no-console
      console.error('Firebase admin initialization error', error.stack);
    }
  }

  firebaseInstance = firebase;
  return firebaseInstance;
};

export default getFirebase;
