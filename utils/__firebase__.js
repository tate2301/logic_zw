
const admin = require("firebase-admin");

var serviceAccount = require("./logic-9874e-firebase-adminsdk-w7k30-49f7d97d6f.json");

const __firebase_app__ = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://logic-9874e.firebaseio.com"
});

module.exports = __firebase_app__