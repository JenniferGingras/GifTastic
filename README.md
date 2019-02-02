# GifTastic

This is webpage that displays gifs pulled from Giphy.

## The game includes:

* A title and a theme
* Topic buttons that display on pageload
* A search form that allows users to put in keywords to make their own buttons
* A space for gifs to populate when their keyword button is clicked
* Some info about the gif such as rating, title, etc.
* A clear gif button

## Functionality:

* Each button uses an ajax request to pull 10 gifs from giphy and display them on the page
* The search form takes user input and dynamically creates a button from that input
* The user created button will pull 10 gifs and display them
* The gifs will stop and start playing when clicked
* Gifs are not overwritten, but added to the page at each button click
* The 'clear gifs' button will delete the gifs currently on the page

## How to use

When a user clicks on a button, 10 static gifs are displayed on the page. If the user clicks on the gif image the gif will play. On a second click the gif will stop. 

Clicking on another button will display 10 more gifs. To clear all the gifs on the screen the user can click the "clear gifs" button. 

The user can create their own button by typing keywords into the search form. Upon hitting 'search' a new button with their keywords will appear as the last button. That button can be clicked to pull up 10 gifs related to the keywords. 

#### possible additions/fixes

The same 10 gifs appear for each button and buttons can't be clicked twice.
