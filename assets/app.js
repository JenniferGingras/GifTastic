$(document).ready(function () {

  // VARIABLES
  // API key = 4Q4vKw9r2o7hoV1Epz41X0wERRiKJl4u
  // "http://api.giphy.com/v1/gifs/search?q=" + searchWord + "&api_key=4Q4vKw9r2o7hoV1Epz41X0wERRiKJl4u&limit=10"
  var buttons = ["Rainbow Bright", "Bill Nye", "Ninja Turtles", "Street Fighter", "Neverending Story", "Pee Wee's Playhouse", "MC Hammer",
    "Princess Bride", "Jem and the Holograms", "Lisa Franck", "Fraggle Rock", "Cyndi Lauper", "Saved by the Bell",
  ]
  var info = [];


  // FUNCTIONS

  // create buttons using the keywords from the button array
  var makeButtons = function () {
    buttons.forEach(function (button, index) {
      var b = $('<button>');
      b.addClass("nameButton");
      b.attr("data-name", button);
      b.text(button);
      $(".gifButtons").append(b);
    });
  }
  makeButtons();

  // link the buttons to the API url so that they call up the requested gifs
  $(".nameButton").on("click", function () {
    var button = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + button + "&api_key=4Q4vKw9r2o7hoV1Epz41X0wERRiKJl4u&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var info = response.data;
      console.log(info);

      for (var i = 0; i < info.length; i++) {
        // info.forEach(function (gif, index) {
        // var rating = $("<p>").text("Rating: " + info[i].rating);
        // console.log(info[i].rating);
        //var title = $("<p>").text("Title: " + info[i].title);
        var gifImage = $("<img>");
        gifImage.attr("src", info[i].images.fixed_height.url);



        $(".gifSpace").prepend(gifImage);

      }

    });
  });

  // Calling the getGifs function when a button is clicked


  // take in user input in the search form
  $(".searchButton").on("click", function (event) {
    event.preventDefault();

    var keyword = $(".keyword-input").val().trim();
    console.log(keyword);
  });
  // add the user input into an array
  // create a new button from the user input
  // 








});