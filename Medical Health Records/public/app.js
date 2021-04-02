  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD_Y8knzJfhd9-5mdDkumwVYQoLKxpS1T8",
    authDomain: "ccproject183176.firebaseapp.com",
    projectId: "ccproject183176",
    storageBucket: "ccproject183176.appspot.com",
    messagingSenderId: "1054011285520",
    appId: "1:1054011285520:web:f9998d5560d7daca326a95"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app)

});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
            
            .then(result => {
                const user = result.user;
                document.write('Hello $(user.displayName)');
                console.log(user)
            })
            .catch(console.log)

}