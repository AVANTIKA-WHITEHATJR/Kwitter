var firebaseConfig = {
      apiKey: "AIzaSyBSgj6AT0eqq9mBSGFaEl04L_5m4KXUeIo",
      authDomain: "classtest-f9971.firebaseapp.com",
      databaseURL: "https://classtest-f9971.firebaseio.com",
      projectId: "classtest-f9971",
      storageBucket: "classtest-f9971.appspot.com",
      messagingSenderId: "498318370740",
      appId: "1:498318370740:web:7d8addbe365a73fde434e1",
      measurementId: "G-N462Q13YY8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
