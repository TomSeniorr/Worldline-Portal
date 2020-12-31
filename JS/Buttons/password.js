let login1 = document.querySelector(".backToLoginPage1");
let register = document.querySelector(".backToRegister1");
// Declaring the Add Event Handlers
login1.addEventListener("click", () => {
  login1();
});
register.addEventListener("click", () => {
  register();
});
// Functions for location of href
login1 = () => {
  window.location.href = "/HTML/login.html";
};
register = () => {
  window.location.href = "/HTML/register.html";
};
