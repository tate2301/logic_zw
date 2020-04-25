import * as firebase from 'firebase/app'
import __firebase_client__ from "../utils/__firebase_client__";
var provider = new firebase.auth.GoogleAuthProvider();


const _firebaseLoginWithEmail = async (email, password) => {
    let credential = ""
    await __firebase_client__.auth().signInWithEmailAndPassword(email, password)
        .then(async () => {
            credential = await __firebase_client__.auth().currentUser.getIdToken().then(token => token)
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

    return {credential: credential}
} 

const _firebaseLoginWithGoogle = async () => {
    let credential = ""
    await __firebase_client__.auth().signInWithPopup(provider).then(async (result) => {
        if (result.credential) {
            credential = await __firebase_client__.auth().currentUser.getIdToken().then(token => token)
        }
        // The signed-in user info.
        var user = result.user;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        var credential = error.credential;
        // ...
      });

      return {credential: credential}
}

export default _firebaseLoginWithEmail
export {
    _firebaseLoginWithGoogle
}