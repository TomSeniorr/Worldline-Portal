time = () => {
  let today = new Date();
  // Converting the Today object to the Local String So Time and Date
  let local = today.toLocaleString("en-us");
  document.getElementById("time").innerHTML = local;
};
setInterval(time, 1000);
