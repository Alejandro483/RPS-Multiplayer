$(document).ready(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyCPgyNvjE0lkWCW6lQcygqfER3eOYJBMyA",
    authDomain: "rps-app-d104d.firebaseapp.com",
    databaseURL: "https://rps-app-d104d.firebaseio.com",
    projectId: "rps-app-d104d",
    storageBucket: "rps-app-d104d.appspot.com",
    messagingSenderId: "168088485849",
    appId: "1:168088485849:web:a23963ca34a4fab75823c8",
    measurementId: "G-M6T3VZSYH9",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  var numUsers = null;
  var user1 = null;
  var user2 = null;
  var userTurn = 1;

  //   var usersRef = firebase.ref("users");

  database.ref("users").on("value", function (snapshot) {
    numUsers = snapshot.numChildren();
    console.log(numUsers);
    var userData = snapshot.child("1").val();
    console.log(userData);
    console.log(snapshot.val());
    // var userName =
    var selector = "#player" + numUsers;
    // $(selector).text()
  });

  $("#start").on("click", function (event) {
    event.preventDefault();
    $("#game").show();
    $("#user-form").hide();

    var user = $("#userName").val();

    if (user) {
      if (numUsers === 0) {
        database.ref("users").push({
          player1: user,
        });
        console.log(user);
      } else if (numUsers === 1) {
        database.ref("users").push({
          player2: user,
        });
      }
    } else {
      console.log("enter User Name");
    }
  });
});
