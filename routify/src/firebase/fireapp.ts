import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const fireapp = firebase;
export const auth = firebase.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();
export const githubAuth = new firebase.auth.GithubAuthProvider();
// export const anonAuth = new firebase.auth.signInAnonymously();
export const firestore = firebase.firestore();