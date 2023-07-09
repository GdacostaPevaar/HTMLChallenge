var projectButtons = document.getElementsByClassName("image__description");

for (var i = 0; i < projectButtons.length; i++) {
  projectButtons[i].addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = "project.html";
  });
}

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var logo = document.querySelector(".navbar-logo");
  if (window.scrollY > 0) {
    navbar.classList.add("hidden");
    logo.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
    logo.classList.remove("hidden");
  }
});
