$(document).ready(function () {

  // VARIABLES
  // API key = 4Q4vKw9r2o7hoV1Epz41X0wERRiKJl4u
  // "http://api.giphy.com/v1/gifs/search?q=" + searchWord + "&api_key=4Q4vKw9r2o7hoV1Epz41X0wERRiKJl4u&limit=10"
  var buttonArr = ["Rainbow Bright", "Bill Nye", "Ninja Turtles", "Street Fighter", "Mr. T", "Pee Wee's Playhouse", "MC Hammer",
    "Princess Bride", "Jem and the Holograms", "Lisa Franck", "Cyndi Lauper", "Saved by the Bell",
  ]
  var info = [];


  // FUNCTIONS

  // CREATE BUTTONS FROM ARRAY
  // ----------------
  var makeButtons = function () {
    buttonArr.forEach(function (button) {
      var b = $('<button>');
      b.addClass("nameButton");
      b.attr("data-name", button);
      b.text(button);
      $(".gifButtons").append(b);
    });
  }
  makeButtons();

  // GET USER INPUT
  // ----------------
  $(".searchButton").on("click", function (event) {
    event.preventDefault();
    var searchword = $(".keyword-input").val().trim();
    console.log(searchword);
    // add the user input into the array
    buttonArr.push(searchword);
    $(".gifButtons").empty();
    console.log(buttonArr);
    // create the buttons from the new array with the added user search
    makeButtons();
  });

  // GET THE GIFS
  // --------------
  // get the click event for the button
  $(document).on("click", ".nameButton", function () {
    var keyword = $(this).attr("data-name");
    var keyword2 = keyword.replace(/\s/g, "+");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + keyword2 + "&api_key=4Q4vKw9r2o7hoV1Epz41X0wERRiKJl4u&limit=10";
    // use ajax to retrieve the gif data
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      info = response.data;
      console.log(info);
      // loop through the returned array to add each gif to the DOM
      for (var i = 0; i < info.length; i++) {
        // gif and all related info is in it's own div
        var newDiv = $("<div>");
        newDiv.addClass("gif-columns");
        // the still and inimated states of the gif are added as attributes
        var gifImage = $('<img>').attr("src", info[i].images.fixed_height_still.url).attr("data-still", info[i].images.fixed_height_still.url).attr("data-animate", info[i].images.fixed_height.url).attr("data-state", "still");
        // a class is added so that it can be used in the click event below 
        gifImage.addClass("image");
        // text info that will display with it
        var rating = $('<p>').text('Rating: ' + info[i].rating.toUpperCase());
        var title = $('<p>').text(info[i].title);
        // for each gif everything is added to the div
        newDiv.append(gifImage, rating, title);
        $(".gifSpace").prepend(newDiv);
      }
    })
  });

  // changing the state of the gif from still to animated 
  $(document).on("click", ".image", function () {
    console.log("I've been clicked");
    var state = $(this).attr("data-state");
    console.log($(this).attr("data-state"))

    if (state === "still") {
      // change the attribute of the gif to the animated src attribute (which leads to the gif url)
      $(this).attr("src", $(this).data("animate"));
      // change the data-state to 'animate' so the else statement will work in reverse to the if
      $(this).attr("data-state", "animate");
      console.log($(this).data("animate"));
    } else {
      $(this).attr("src", $(this).data("still"));
      $(this).attr("data-state", "still");
      console.log($(this).data("still"));
    }
  });

  $(".clearButton").on("click", function (event) {
    event.preventDefault();
    $(".gifSpace").empty();
  });





});