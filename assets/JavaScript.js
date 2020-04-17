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
  firebase.analytics();

  //   var database = firebase.database();

  $("#start").on("click", function (event) {
    event.preventDefault();
    var user = $("#userName").val();
    if (user) {
      console.log(user);
    } else {
      console.log("enter User Name");
    }
  });
});
