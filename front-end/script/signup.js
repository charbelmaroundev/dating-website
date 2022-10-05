const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const usernameEl = document.getElementById("username");
const genderEl = document.getElementById("gender");
const interstedGenderEl = document.getElementById("intersted-gender");
const locationEl = document.getElementById("location");
const passwordEl = document.getElementById("password");
const submitEl = document.getElementById("submit");
const responseEl = document.querySelector(".response");

const dating_pages = {};

dating_pages.baseURL = "http://127.0.0.1:8000/api/v0.1";

dating_pages.Console = (title, values, oneValue = true) => {
  console.log("---" + title + "---");
  if (oneValue) {
    console.log(values);
  } else {
    for (let i = 0; i < values.length; i++) {
      console.log(values[i]);
    }
  }
  console.log("--/" + title + "---");
};

dating_pages.postAPI = async (api_url, api_data, api_token = null) => {
  try {
    return await axios.post(api_url, api_data, {
      headers: {
        Authorization: "token " + api_token,
      },
    });
  } catch (error) {
    dating_pages.Console("Error from POST API", error);
  }
};

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
    responseEl.style.color = "#FFB4B4";
    responseEl.style.opacity = 1;
  } else {
    dating_pages.postAPI(dating_pages.baseURL + "/register", {
      first_name: firstNameEl.value,
      last_name: lastNameEl.value,
      username: usernameEl.value,
      gender: genderEl.value,
      intersted_gender: interstedGenderEl.value,
      location: locationEl.value,
      pasword: passwordEl.value,
    });

    responseEl.textContent = "Account Created";
    responseEl.style.color = "#B2A4FF";
    responseEl.style.opacity = 1;
  }
});
