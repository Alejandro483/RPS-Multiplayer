$(document).ready(function () {
 
 // INIT FIREBASE
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

  
  firebase.initializeApp(firebaseConfig);

// GLOBAL VARIABLES
  var database = firebase.database();
  var numUsers = null;
  var user1 = null;
  var user2 = null;
  var userTurn = 1;
  var usersRef = database.ref("users");
  var turnRef = database.ref("turn");
  var currentUsers = null;
  var userObj = {};
  var activeUser = null;
  

  // FUNCTION THAT UPDATES THE DATABASE IN REAL TIME
  usersRef.on("value", function (snapshot) {
    numUsers = snapshot.numChildren();
    console.log(numUsers);
    // var userData = snapshot.child("1").val();
    var data = snapshot.val();
    // console.log(userData);
    console.log(data);
    console.log(data.player1);
    console.log(data.player2);
    
    // ASSIGNING PLAYERS TO THE GAME
    if (data.player1) {
      $("#player1 h1").text(data.player1);
    }
    if (data.player2) {
      $("#player2 h1").text(data.player2);
    }
    // console.log(snapshot.child.val());
    // var userName =
    var selector = "#player" + numUsers;
    // $(selector).text()
  });

  // ASSIGNING TURNS TO PLAYERS
  usersRef.on("child_added", function (snapshot) {
    if (currentUsers === 1) {
      // set turn to 1, which starts the game
      turnRef.set(1);
    }
  });

  // HERE YOU START THE GAME
  $("#start").on("click", function (event) {
    event.preventDefault();
    $("#game").show();
    $("#user-form").hide();

    var user = $("#userName").val();

    if (user) {
      if (numUsers === 0) {
        userObj = {
          player1: user,
        };
        database.ref("users").update(userObj);
        console.log(user);
        activeUser = "#p1-choice";
        console.log(activeUser);
      } else if (numUsers === 1) {
        activeUser = "#p2-choice";
        userObj.player2 = user;
        database.ref("users").update(userObj);
        console.log(activeUser);
      }
      gamePlays.forEach(function (play) {
        // console.log(play);
        // const playerNum = "#p1-choice";
        console.log(activeUser);
        renderButtons(play, activeUser);
      });
    } else {
      console.log("enter User Name");
    }
  });
  var gamePlays = ["Rock", "Paper", "Scissors"];

  function alertUsersChoice() {
    var gameChoice = $(this).attr("data-choice");

    alert(gameChoice);
  }
  

  function renderButtons(choice, playerNum) {
    var btn = $("<button>");

    btn.addClass("choice");
    btn.attr("data-choice", choice);
    btn.text(choice);
    $(playerNum).append(btn);
  }
  // if (btn).on("click", function (event) {
  //   event.preventDefault();
  //   alert(gameChoice);
  // })
});
