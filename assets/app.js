$(document).ready(function () {

  // VARIABLES
  // API key = 4Q4vKw9r2o7hoV1Epz41X0wERRiKJl4u
  // "http://api.giphy.com/v1/gifs/search?q=" + searchWord + "&api_key=4Q4vKw9r2o7hoV1Epz41X0wERRiKJl4u&limit=10"
  var buttonArr = ["Rainbow Bright", "Bill Nye", "Ninja Turtles", "Street Fighter", "Neverending Story", "Pee Wee's Playhouse", "MC Hammer",
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
    // add the user input into an array
    buttonArr.push(searchword);
    $(".gifButtons").empty();
    console.log(buttonArr);
    // create a new button from the user input
    makeButtons();
  });

  // GET THE GIFS
  // --------------
  $(".nameButton").on("click", function () {
    var keyword = $(this).attr("data-name");
    var keyword2 = keyword.replace(/\s/g, "+");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + keyword2 + "&api_key=4Q4vKw9r2o7hoV1Epz41X0wERRiKJl4u&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      info = response.data;
      console.log(info);

      for (var i = 0; i < info.length; i++) {
        // info.forEach(function (gif) {
        var newDiv = $("<div>");
        newDiv.addClass("col-md-4 card-column gif");
        // var gifImage = $('<div class="card"><img src="' + info[i].images.fixed_height_still.url + '" data-state="still" class="gif card-img-top" alt="' + info[i].title + '"></div><div class="card-body"><h6 class="card-title">Rating: ' + info[i].rating.toUpperCase() + '</h6><p class="card-text">' + info[i].title + '</p></div>');
        var gifImage = $('<img>').attr("src", info[i].images.fixed_height_still.url);
        gifImage.attr("data-still", info[i].images.fixed_height_still.url);
        gifImage.attr("data-animate", info[i].images.fixed_height.url);
        gifImage.attr("data-state", "still");
        newDiv.append(gifImage);
        $(".gifSpace").prepend(newDiv);
      }
    })
  });

  // changing the state of the gif from still to animated (I tried to make this a separate click event, but couldn't get it to run unless it was in this function)
  $('.gifSpace').on("click", ".gif", function () {
    console.log("I've been clicked");
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }

  })

  



});