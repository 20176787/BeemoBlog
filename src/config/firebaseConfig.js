const firebase = require('firebase')
require('firebase/storage')
require('firebase/auth')
require('firebase/firestore')
require('firebase/functions')

const firebaseConfig = {
    apiKey: "AIzaSyCwH7Wzk6t6UGkNp1WjuQEIm4DJ6_vojKU",
    authDomain: "beemoblog.firebaseapp.com",
    databaseURL: "https://beemoblog.firebaseio.com",
    projectId: "beemoblog",
    storageBucket: "beemoblog.appspot.com",
    messagingSenderId: "566237766840",
    appId: "1:566237766840:web:f95fb05a9a95518a0ac04d",
    measurementId: "G-CXN8LGP54G"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const functions = firebase.functions()
module.exports = exports = {
    db,
    auth,
    storage,
    functions
}
