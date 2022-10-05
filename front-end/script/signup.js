const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const usernameEl = document.getElementById("username");
const genderEl = document.getElementById("gender");
const interstedGenderEl = document.getElementById("intersted-gender");
const locationEl = document.getElementById("location");
const passwordEl = document.getElementById("password");
const submitEl = document.getElementById("submit");
const responseEl = document.querySelector(".response");

submitEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !firstNameEl.value ||
    !lastNameEl.value ||
    !usernameEl.value ||
    !genderEl.value ||
    !interstedGenderEl.value ||
    !locationEl.value ||
    !passwordEl.value
  ) {
    console.log("haha");
    responseEl.style.color = "#FFB4B4";
    responseEl.style.opacity = 1;
  }
});
