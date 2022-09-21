import {initializeApp} from "firebase/app";
import {getAuth , signInWithPopup , GoogleAuthProvider , createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import{getFirestore , doc, getDoc , setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDBVvCbOKuWh2wtgd1rcXU4TiI_oOGylWw",
    authDomain: "vjay-shopping.firebaseapp.com",
    projectId: "vjay-shopping",
    storageBucket: "vjay-shopping.appspot.com",
    messagingSenderId: "73490866464",
    appId: "1:73490866464:web:f6c44556be4ab8fdf73745"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  });
console.log(firebaseApp);
  export const auth = getAuth();
    export const signInWithGooglePopup = () => signInWithPopup(auth , provider);
  

    export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth , additionalInfo={}) =>{
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email , password) => {
 if(!email || !password) return;

 return await createUserWithEmailAndPassword(auth , email , password);
};
export const signinAuthUserWithEmailAndPassword = async(email , password) => {
  if(!email || !password) return;
 
  return await signInWithEmailAndPassword(auth , email , password);
 };
 export const signOutUser = async() => await signOut(auth) ;

 export const authStateChangedListener =(callback)=>{
  onAuthStateChanged(auth, callback)
 };