//Open Hamburger menu  
function myFunction() {
  var menu = document.getElementById("myLinks");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

//Slieshow
const slideshowImages = document.querySelectorAll(".intro .slideshow-img");

const time = 5000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.display = "block";

setInterval(nextImage, time);
  function nextImage() {
  slideshowImages[currentImageCounter ].style.display = "none";
  currentImageCounter  = (currentImageCounter  + 1)  % slideshowImages.length;
   slideshowImages [currentImageCounter ].style.display = "block";
}