const log = document.getElementById("signin");

validation = () => {
  let username = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = "tom";
  let pass = "tom";

  if (username == user && password == pass) {
    alert("Welcome");
    window.location.href = "https://www.youtube.com/";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
  } else {
    alert("Incorrect");
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
  }
};

log.addEventListener("click", () => {
  validation();
});
