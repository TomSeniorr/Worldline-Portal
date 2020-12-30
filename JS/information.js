// Declaring the Input boxes
let email;
let das;
let dep;
let loc;
// Declaring the Button for the Submit
let button = document.getElementById("submit");
// Event Handler for the Button Above
button.addEventListener("click", () => {
  getvalue();
  resetCredentials();
});
// Retrieving all the values of the inputs
getvalue = () => {
  email = document.getElementById("email").value;
  das = document.getElementById("das").value;
  dep = document.getElementById("dep").value;
  loc = document.getElementById("loc").value;
  // Compares against Empty Strings and if its empty will alert an error
  if (!email || !das || !dep || !loc) {
    alert("Please Fill out Required Fields");
    resetCredentials();
  } else {
    console.log("welcome");
    resetCredentials();
  }
};
// Function for Resetting the Values of the input boxes
resetCredentials = () => {
  ``;
  document.getElementById("email").value = "";
  document.getElementById("das").value = "";
  document.getElementById("dep").value = "";
  document.getElementById("loc").value = "";
};
