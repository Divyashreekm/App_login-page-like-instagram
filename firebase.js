import * as firebase from "firebase"

const firebaseConfig ={
    apiKey: "AIzaSyA1Eu8xyx7OAQ8y4ng-Fu6phrCWJWHiYlc",
    authDomain: "trial-b04e6.firebaseapp.com",
    projectId: "trial-b04e6",
    storageBucket: "trial-b04e6.appspot.com",
    messagingSenderId: "870551973559",
    appId: "1:870551973559:web:151d8cb3f567a01109e732",
    measurementId: "G-HM63X09XYF"
};

let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()
export { auth};