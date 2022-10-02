const featherUserEl = document.querySelector(".feather-user");
const editProfileEl = document.querySelector(".edit-profile");
const backdropEl = document.querySelector(".backdrop");
const saveEl = document.querySelector(".edit-profile-nav p");
const closeEl = document.querySelector(".edit-profile-nav svg");

featherUserEl.addEventListener("click", () => {
  editProfileEl.classList.remove("none");
  backdropEl.classList.remove("none");
});

const closePopup = () => {
  editProfileEl.classList.add("none");
  backdropEl.classList.add("none");
};

saveEl.addEventListener("click", closePopup);
backdropEl.addEventListener("click", closePopup);
closeEl.addEventListener("click", closePopup);
