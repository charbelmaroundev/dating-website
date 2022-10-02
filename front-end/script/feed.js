const featherUserEl = document.querySelector(".feather-user");
const editProfileEl = document.querySelector(".edit-profile");
const backdropEl = document.querySelector(".backdrop");

featherUserEl.addEventListener("click", () => {
  editProfileEl.classList.remove("none");
  backdropEl.classList.remove("none");
});
