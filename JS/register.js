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
  myInfo();
});

myInfo = () => {
  firstName = prompt("Enter Name");
  lastName = prompt("Enter Last Name");

  if (firstName == "" && lastName == "") {
    alert("Incorrect Detail");
    return;
  } else {
    document.location = "mailto:tomsenior@gmail.com";
  }
};
