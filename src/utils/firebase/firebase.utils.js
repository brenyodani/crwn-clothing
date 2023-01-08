
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';




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
  
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    // when did the user sign in
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch(error) {
      console.log("error creating the user", error.message);
    }
  }

  
  return userDocRef;

  // if user data does not exists


  // return userDocRef
}



export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}


export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback); 