
//ADD YOUR FIREBASE LINKS HERE


var firebaseConfig = {
      apiKey: "AIzaSyDEbJiCtHildYvMVYNolrsozi8YBWW-Y88",
      authDomain: "class-text-75edd.firebaseapp.com",
      projectId: "class-text-75edd",
      storageBucket: "class-text-75edd.appspot.com",
      messagingSenderId: "283862215848",
      appId: "1:283862215848:web:51d2874429de3239d2269d"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code



      //End code
      });});}
getData();
