import { takeLatest , call , put , all} from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user-types";

import { signinSuccess ,  signinFailed, signUpSuccess, signUpFailed, signOutSuccess, signOutFailed} from "./user-action";
import { getCurrentUser , 
    createUserDocumentFromAuth, 
    signInWithGooglePopup, 
    signinAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
    signOutUser} from "../../utils/firebase/firebase";

export function* getSnapshotFromAuth(userAuth , additionalDetails){
   try {
    const userSnapshot = yield call(createUserDocumentFromAuth , userAuth , additionalDetails);
    yield put(signinSuccess({id:userSnapshot.id, ...userSnapshot.data()}));
   } catch (error) {
    yield put(signinFailed(error))
   }
}

export function* signinWithGoogle(){
    try {
        const {user} = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromAuth, user)
    } catch (error) {
        yield put (signinFailed(error));
    }

}

export function* signinWithEmail({payload : {email , password}}){
  try {
    const {user} = yield call(signinAuthUserWithEmailAndPassword, email ,password);
    yield call(getSnapshotFromAuth , user)
  } catch (error) {
    yield put (signinFailed(error));
  }

}
export function* signUp({payload : {email , password , displayName}}){
try {
    const {user} = yield call(createAuthUserWithEmailAndPassword , email, password);
    yield put(signUpSuccess(user , {displayName}));
} catch (error) {
    yield put(signUpFailed(error));
}
}

export function* signInAfterSignUp({payload : {user , additionalDetails}}){
   yield call (getSnapshotFromAuth , user , additionalDetails);
}
export function* signOut(){
    try {
        yield call(signOutUser);
        yield put(signOutSuccess());
    } catch (error) {
        yield put (signOutFailed());
    }
    
}

export function* isAuthenticated(){
    
    try {
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        yield call (getSnapshotFromAuth)
    } catch (error) {
        yield put (signinFailed(error));
    }
}

export function* onEmailSigninStart(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNIN_START , signinWithEmail)
}


export function* onGoogleSigninStart(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGNIN_START , signinWithGoogle)
}
export function* onSignUpStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGNUP_START , signUp)
}
export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGNUP_SUCCESS , signInAfterSignUp)
}
export function* onSignOut(){
    yield takeLatest(USER_ACTION_TYPES.SIGNOUT_START, signOut)
}

export function* onCheckUserSession(){
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION , isAuthenticated )
}




export function* userSaga(){
    yield all([call(onCheckUserSession) , 
        call(onGoogleSigninStart), 
        call(onEmailSigninStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOut)
    ])
}