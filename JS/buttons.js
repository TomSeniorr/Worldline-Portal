// --- Declaring the button Variables ---
let backtoLog = document.querySelector(".backToLoginPage");
let mail = document.querySelector(".sendEmail");
let toRegisterPage = document.querySelector(".backToRegister");
let sub = document.querySelector(".submitDetails");
// --- Functions to open When clicked in the above Event Listeners ---
backToLogin = () => {
  window.location.href = "/HTML/login.html";
};
registerPage = () => {
  window.location.href = "/HTML/register.html";
};
// --- Event Listener Section Divided into different Section Per different elements ---
backtoLog.addEventListener("click", () => {
  backToLogin();
});
toRegisterPage.addEventListener("click", () => {
  registerPage();
});
