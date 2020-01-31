$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggleID").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 374) {
      $("#navbarSupportedContent").collapse("hide");
    }
  });
});