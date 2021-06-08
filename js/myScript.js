//Open Hamburger menu  
function myFunction() {
  var menu = document.getElementById("myLinks");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

//Change Slieshow
const slideshowImages = document.querySelectorAll(".intro .slideshow-img");

const time = 5000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.display = "block";

setInterval(nextImage, time);
  function nextImage() {
    slideshowImages[currentImageCounter].style.display = "none";
    currentImageCounter  = (currentImageCounter  + 1)  % slideshowImages.length;
    slideshowImages [currentImageCounter].style.display = "block";
  }

const slideshowText = document.querySelectorAll(".intro .slideshow-txt");

// Change Text
let currentTextCounter = 0;
slideshowText[currentTextCounter].style.display = "block";

setInterval(nextText, time);
  function nextText () {
    slideshowText[currentTextCounter].style.display = "none";
    currentTextCounter  = (currentTextCounter + 1)  % slideshowImages.length;
    slideshowText [currentTextCounter].style.display = "block";
  }

//Scroll to the top

topbutton = document.getElementById("myBtn");

window.onscroll = () => {scrollFunc()};

function scrollFunc() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}






