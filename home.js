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
  firebase.analytics();

  const auth = firebase.auth();
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true }); 

auth.onAuthStateChanged(user => {
if (user) {
//console.log('user logged in: ', user);
//console.log(firebase.auth().currentUser.email);
window.alert('Successfully logged in!')
}
});

  const form = document.querySelector('#restaurant-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    //when you submit
    console.log('hi');

    var docRef = db.collection("MyData").doc(form.email.value);

    docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log('User has made a document');

        //Removing old instance of restaurant data 
        db.collection("MyData").doc(form.email.value).delete().then(function() {
            console.log("Document successfully deleted!");
        });

        //Creating new Instance of data
        console.log('Creating new instance of document')
        db.collection('MyData').doc(form.email.value).set({
            Location: form.location.value,
            Name: form.name.value,
            Timings: form.timings.value });
    }

    else {
        console.log('Creating new named document')
        db.collection('MyData').doc(form.email.value).set({
            Location: form.location.value,
            Name: form.name.value,
            Timings: form.timings.value });
        }
    });
});

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
  window.location ="Login.html";
});

    /*db.collection('MyData').add({
        Location: form.location.value,
        Name: form.name.value,
        Timings: form.timings.value
    });
    form.location.value = '';
    form.name.value = '';
    form.timings.value = '';

});*/

