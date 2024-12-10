const firebaseConfig = {
    apiKey: "AIzaSyBhsxoCeRLVzWLz1TVQUcGONm9NDmgSaRs",
    authDomain: "form-8cb73.firebaseapp.com",
    databaseURL: "https://form-8cb73-default-rtdb.firebaseio.com",
    projectId: "form-8cb73",
    storageBucket: "form-8cb73.firebasestorage.app",
    messagingSenderId: "791708830427",
    appId: "1:791708830427:web:cdb3073702019b680f5afe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference the database
var contactFormDB = firebase.database().ref("form");

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get form values
    var name = getElementVal('name');
    var emailId = getElementVal('emailId');
    var message = getElementVal('msgContent');

    // Check if any field is empty
    if (name === "" || emailId === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Save messages to Firebase
    saveMessage(name, emailId, message);

    // Show alert and reset the form
    alert("Your message has been sent successfully!");
    document.getElementById("contactForm").reset();
}

// Save the messages to Firebase
const saveMessage = (name, emailId, message) => {
    var newForm = contactFormDB.push();
    newForm.set({
        name: name,
        emailId: emailId,
        message: message,
    });
};

// Get element value helper function
const getElementVal = (id) => {
    return document.getElementById(id).value;
};
