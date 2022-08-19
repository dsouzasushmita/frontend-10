const username = document.getElementById("username");
const button = document.querySelector(".login-btn");
const small = document.querySelectorAll("small");
const form = document.querySelector("form");

button.addEventListener("click", () => {
  if (username.value != "" && password.value != "") {
    alert(`Hello ${username.value} `);
  } else {
    [...small].map((eachEl) => (eachEl.style.visibility = "visible"));
  }
});

form.addEventListener("change", (e) => console.log(e.target));
