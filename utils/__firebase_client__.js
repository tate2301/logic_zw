const firebase = require("firebase/app");
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyBrzP0AXW2BSi2RbKbxrGGZ37DOSbFA5Os",
    authDomain: "logic.co.zw",
    databaseURL: "https://logic-9874e.firebaseio.com",
    projectId: "logic-9874e",
    storageBucket: "logic-9874e.appspot.com",
    messagingSenderId: "507184417190",
    appId: "1:507184417190:web:ac4a1124cc7519d6dba767",
    measurementId: "G-7WC9X40WJS"
};
  
try {
    firebase.initializeApp(firebaseConfig)
} catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

const __firebase_client__ = firebase

module.exports = __firebase_client__
