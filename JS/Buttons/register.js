// Declaring the Variables
let login = document.querySelector(".backToLoginPage");
let password = document.querySelector(".toPassword");
// Declaring the Add Event Handlers
login.addEventListener("click", () => {
  login1();
});
password.addEventListener("click", () => {
  password1();
});
// Functions for location of href
login1 = () => {
  window.location.href = "/HTML/login.html";
};
password1 = () => {
  window.location.href = "/HTML/forgotten.html";
};
