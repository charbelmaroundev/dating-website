const featherUserEl = document.querySelector(".feather-user");
const editProfileEl = document.querySelector(".edit-profile");
const backdropEl = document.querySelector(".backdrop");
const saveEl = document.querySelector(".edit-profile-nav p");
const closeEl = document.querySelector(".edit-profile-nav svg");
const messageiconEl = document.querySelector(".feather-message-circle");
const rightSectionEl = document.querySelector(".right-section");
const leftSectionEl = document.querySelector(".left-section");

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

// messageiconEl.addEventListener("click", () => {
//   if (window.innerWidth >= 800) {

//   }
//   leftSectionEl.classList.toggle("none");
//   rightSectionEl.classList.toggle("block");
//   console.log(window.innerWidth);
// });
