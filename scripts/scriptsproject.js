var homeButton = document.getElementById("inicio");

homeButton.addEventListener("click", function (event) {
  event.preventDefault();

  window.location.href = "index.html";
});
