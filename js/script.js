
// Automatic Slideshow For Action Movies - change image every 3 seconds
var myIndex = 0;
carousel1();

function carousel1() {
  var i;
  var x = document.getElementsByClassName("action");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel1, 3000);
}

// Automatic Slideshow For Action Movies - change image every 3 seconds
var romIndex = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("romance");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  romIndex++;
  if (romIndex > x.length) {romIndex = 1}
  x[romIndex-1].style.display = "block";
  setTimeout(carousel2, 3000);
}

// Automatic Slideshow For Action Movies - change image every 3 seconds
var trendIndex = 0;
carousel3();

function carousel3() {
  var i;
  var x = document.getElementsByClassName("trend");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  trendIndex++;
  if (trendIndex > x.length) {trendIndex = 1}
  x[trendIndex-1].style.display = "block";
  setTimeout(carousel3, 3000);
}

// Get the button and dropdown content
var genreButton = document.getElementById("genre-button");
var genreDropdown = document.getElementById("genre-dropdown");

// Toggle dropdown on button click
genreButton.addEventListener("click", function() {
    if (genreDropdown.style.display === "block") {
        genreDropdown.style.display = "none";
    } else {
        genreDropdown.style.display = "block";
    }
});

// Close dropdown if clicked outside
window.addEventListener("click", function(event) {
    if (!event.target.matches('#genre-button')) {
        genreDropdown.style.display = "none";
    }
});
