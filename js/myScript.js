// Open linked-in post in another tab
function openWindow() {
    window.open("https://www.linkedin.com/company/beela-se", "_blank");
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}