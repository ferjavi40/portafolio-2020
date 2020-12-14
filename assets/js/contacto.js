// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_PRHYta4y55HESuanLzvIgdxI6PSpOX0",
    authDomain: "formulario-contacto-d2b8c.firebaseapp.com",
    projectId: "formulario-contacto-d2b8c",
    storageBucket: "formulario-contacto-d2b8c.appspot.com",
    messagingSenderId: "291894976176",
    appId: "1:291894976176:web:192e7f3745e5280728a575"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, message);

    saveContactInfo(name, email, message);

    document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    });
}