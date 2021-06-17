import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

const app = firebase.initializeApp({
  // apiKey: "AIzaSyA8LmjQNKly_tFMj7ur5DdmVjjMenr-vvA",
  // authDomain: "react-auth-punch-it.firebaseapp.com",
  // projectId: "react-auth-punch-it",
  // storageBucket: "react-auth-punch-it.appspot.com",
  // messagingSenderId: "843260116172",
  // appId: "1:843260116172:web:a5763e03a858c0fa8ad669"

    apiKey: "AIzaSyAb9wggYPPj3lkp53lqtBNCi8N-G_M89vI",
    authDomain: "ecommerce-restaurant.firebaseapp.com",
    projectId: "ecommerce-restaurant",
    storageBucket: "ecommerce-restaurant.appspot.com",
    messagingSenderId: "383301339765",
    appId: "1:383301339765:web:09bbd5f061455b8357863c"

});
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyAb9wggYPPj3lkp53lqtBNCi8N-G_M89vI",
//     authDomain: "ecommerce-restaurant.firebaseapp.com",
//     projectId: "ecommerce-restaurant",
//     storageBucket: "ecommerce-restaurant.appspot.com",
//     messagingSenderId: "383301339765",
//     appId: "1:383301339765:web:09bbd5f061455b8357863c"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>

const storage = firebase.storage();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export default app;

export { storage, firebase, googleAuthProvider,facebookAuthProvider };
