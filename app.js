const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const error = document.getElementById("error");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (username.value === "admin" && password.value === "password") {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    window.location.href = "success.html";
  } else {
    error.innerHTML = "Invalid username/password";
  }
});
