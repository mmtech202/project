import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUikn4Z6vIohxlGF1tp1gDgYZYY0i7BiE",
    authDomain: "school-f82cc.firebaseapp.com",
    databaseURL: "https://school-f82cc.firebaseio.com",
    projectId: "school-f82cc",
    storageBucket: "school-f82cc.appspot.com",
    messagingSenderId: "756117102276",
    appId: "1:756117102276:web:b0dfafc64d9912565c3391",
    measurementId: "G-5MEN8RP1HX"
  };

firebase.initializeApp(firebaseConfig);
export const databaseRef = firebase.database().ref();
// export const databaseRef = databaseRef.child("todos")