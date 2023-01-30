function myFunction() {
  var x = document.getElementById("abMe");
  var displaySettings = x.style.display;
  if (displaySettings === "none") {
    displaySettings = "inline-block";
  } else {
    displaySettings = "none";
  }
}
