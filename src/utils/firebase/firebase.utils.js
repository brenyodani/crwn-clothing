import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyBxf3P5UF-k7zlakdfpsN5smmtf9K-s2ao",

  authDomain: "crwn-clothing-db-2520c.firebaseapp.com",

  projectId: "crwn-clothing-db-2520c",

  storageBucket: "crwn-clothing-db-2520c.appspot.com",

  messagingSenderId: "638326772458",

  appId: "1:638326772458:web:31b4c047757a3fe7107d93",

  measurementId: "G-7Q7L6KJ37K"

};

const firebaseApp = initializeApp(firebaseConfig);
  
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithGooglePopup(auth, provider);

