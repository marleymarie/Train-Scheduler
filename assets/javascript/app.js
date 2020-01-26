
// Created a new project in Firebase and here is my apiKey and info

var firebaseConfig = {
    apiKey: "AIzaSyCNGiJdvUVUhIYHRSHfdeEFznzhggHPaWs",
    authDomain: "homework7train-a2f5b.firebaseapp.com",
    databaseURL: "https://homework7train-a2f5b.firebaseio.com",
    projectId: "homework7train-a2f5b",
    storageBucket: "homework7train-a2f5b.appspot.com",
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

    $("#submit").on("click", function (event) {

        event.preventhefault();
        
        console.log("something");

        database.ref().push({
            trainName: $("#trainName").val(),
            destination: $("#destination").val(),
            firstTrain: $("#firstTimeT").val(),
            frequency: $("#frequency").val()
        
        });
        
        $("#trainName").val("");
        $("#destination").val("");
        $("#firstTimeT").val("");
        $("#frequency").val("");
        

    });

    //I have been using the activity to help me with this homework, 
    //My tutor and I ran out of time!
    //So this is as far as I got.
    // I was trying to find the time syntax I needed to use to populate the times
    // I believe that is what moments are for. Also I've been waiting for the videos to show up in the sessions to re-watch them. Firebase vids are not up yet
    //Also append the new information to show at the top of the screen inside the tr th tags
    //I created a new project in firebase called Homework7Train and got the api key and info.
    //I wanted to see my inputs in the database but im thinking its because I didnt finish the code.


  
