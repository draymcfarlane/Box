  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
     apiKey: "AIzaSyD2d5JZ-LrjfCI2q0S_81IHaa27NAS-2Y8",
     authDomain: "e-commerce-560c2.firebaseapp.com",
     databaseURL: "https://e-commerce-560c2-default-rtdb.firebaseio.com",
     projectId: "e-commerce-560c2",
     storageBucket: "e-commerce-560c2.appspot.com",
     messagingSenderId: "1034222119829",
     appId: "1:1034222119829:web:2038e5936526b9398d249c"
   };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
     alert("Sign Up Successful!");
     var delayInMilliseconds = 5000; //1 second

     setTimeout(function() {
     //your code to be executed after 1 second
     }, delayInMilliseconds);
}


  //signOut

  function signOut(){
    auth.signOut();
    alert("Sign Out Successful!");
    //redirect to homepage
    location.replace("startpage.html")
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);  
      location.replace("index.html")
    }
  })