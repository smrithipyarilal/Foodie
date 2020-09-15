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
  const auth = firebase.auth();
  const db = firebase.firestore();

  

const cafeList = document.querySelector('#rest-list');

console.log('hi')
function renderCafe(doc){
    let li = document.createElement('li');
    let location = document.createElement('span');
    let name = document.createElement('span');
    let timings = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    location.innerText = doc.data().Location;
    name.innerText = doc.data().Name;
    timings.innerText = doc.data().Timings;

    li.appendChild(name);
    li.appendChild(location);
    li.appendChild(timings);

    cafeList.appendChild(li);
}

db.collection('MyData').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        console.log(doc.id);
        renderCafe(doc);
    });
});
