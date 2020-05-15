import firebase from 'firebase';
import * as firebaseui from 'firebaseui';


// Configuración de firebase en el proyecto
var firebaseConfig = {
    apiKey: "AIzaSyAb7sApE7J1KS9cjL7GtIZoOFIhCe0_zs8",
    authDomain: "fir-chotuve-web-interface.firebaseapp.com",
    databaseURL: "https://fir-chotuve-web-interface.firebaseio.com",
    projectId: "fir-chotuve-web-interface",
    storageBucket: "fir-chotuve-web-interface.appspot.com",
    messagingSenderId: "687693424632",
    appId: "1:687693424632:web:60888c92f62b41ad16980d",
    measurementId: "G-XS02SZQVD2"
  };


const uiConfig = {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  //exporta módulo de authentication para poder acceder desde cualquier punto de la app (deberia hacerse lo mismo si se quisiera export la db)
  export const auth = firebase.auth();
  export const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true,
});

  //login
  export const startUi = (elementId) => {
      const ui = new firebaseui.auth.AuthUI(auth);
      ui.start(elementId, uiConfig);
  };