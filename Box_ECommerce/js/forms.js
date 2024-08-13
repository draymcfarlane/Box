     // Your web app's Firebase configuration
     var firebaseConfig = {
          apiKey: "AIzaSyD2d5JZ-LrjfCI2q0S_81IHaa27NAS-2Y8",
          authDomain: "e-commerce-560c2.firebaseapp.com",
          databaseURL: "https://e-commerce-560c2-default-rtdb.firebaseio.com",
          projectId: "e-commerce-560c2",
          storageBucket: "e-commerce-560c2.appspot.com",
          messagingSenderId: "1034222119829",
          appId: "1:1034222119829:web:2038e5936526b9398d249c"
        };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
