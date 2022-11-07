import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBydQzd60_Kn_uBU8dNh9zKntKqC2KOOeE",
  authDomain: "teste-oct7.firebaseapp.com",
  projectId: "teste-oct7",
  storageBucket: "teste-oct7.appspot.com",
  messagingSenderId: "333148851970",
  appId: "1:333148851970:web:7c6f8b7034accc0c0f3c1b",
  measurementId: "G-H04NK9FJ6M"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export {db, auth};
