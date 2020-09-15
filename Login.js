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



const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  console.log(email);
  console.log(password);

  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    window.location = "home.html";
  });

});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
    console.log('user logged in: ', user);
    console.log(firebase.auth().currentUser.email);
    }
    });




