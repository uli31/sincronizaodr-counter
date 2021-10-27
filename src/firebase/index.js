import * as firebase from 'firebase/app';
import 'firebase/firestore';
const app = firebase.initializeApp( {
    apiKey: "AIzaSyCcDyyeTsSW_rIgllLWp2yvGUKSncw1meo",
    authDomain: "coderhouse-501de.firebaseapp.com",
    projectId: "coderhouse-501de",
    storageBucket: "coderhouse-501de.appspot.com",
    messagingSenderId: "790503253945",
    appId: "1:790503253945:web:94ce3279091cbafe41f868",
    measurementId: "G-YEW5RDQYSZ"
  });
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}