// Declaring the variables
const backButton = document.querySelector(".btn-back");
const btnEmail = document.querySelector(".btn-email");

let firstName;
let lastName;

// Event Listener for Back Click
backButton.addEventListener("click", () => {
  window.location.href = "/HTML/login.html";
});

btnEmail.addEventListener("click", () => {
  document.location = "mailto:tomsenior20@gmail.com";
});
