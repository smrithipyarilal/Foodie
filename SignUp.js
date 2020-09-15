var firebaseConfig = {
    apiKey: "AIzaSyDRr2d90xA-Tc7_aHSSOc7FcmcF5P7QLKk",
    authDomain: "foodie-15360.firebaseapp.com",
    databaseURL: "https://foodie-15360.firebaseio.com",
    projectId: "foodie-15360",
    storageBucket: "foodie-15360.appspot.com",
    messagingSenderId: "1077127510429",
    appId: "1:1077127510429:web:720ae22be916ccf3909774",
    measurementId: "G-33MKD8CGMD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;
  console.log(email);
  console.log(password);

  const auth = firebase.auth();
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);

  });

});





