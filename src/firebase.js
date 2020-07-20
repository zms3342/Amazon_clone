import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
	  apiKey: "AIzaSyDd26OXbXFBb4OWzkfzsd5kH69gRSosT7I",
	  authDomain: "clone-29d70.firebaseapp.com",
	  databaseURL: "https://clone-29d70.firebaseio.com",
	  projectId: "clone-29d70",
	  storageBucket: "clone-29d70.appspot.com",
	  messagingSenderId: "329293410712",
	  appId: "1:329293410712:web:201f295a7e9939dc5e3bed",
	  measurementId: "G-RJVNRDXWZ5"
	});
 

// const db = firebaseApp.firestore(); 
const auth = firebase.auth(); 

export {auth}; 