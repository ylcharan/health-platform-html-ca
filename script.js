const form = document.getElementById("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const fullNameError = document.getElementById("name-error");
const emailError = document.getElementById("mail-error");
const numberError = document.getElementById("number-error");

form.addEventListener("submit", (e) => {
  let nameValue = fullName.value.trim();
  let emailValue = email.value.trim();
  let numberValue = number.value.trim();
  if (!validateForm(nameValue, emailValue, numberValue)) {
    e.preventDefault();
    console.log("error");
  } else {
    window.location.href = "/";
  }
});

const validateEmail = (email) => {
  return String(email).toLowerCase().includes("@");
};

const validateForm = (nameValue, emailValue, numberValue) => {
  let success = true;
  if (nameValue == "") {
    success = false;
    fullNameError.innerText = "Enter your name";
  } else {
    fullNameError.innerText = "";
  }
  if (!validateEmail(emailValue)) {
    success = false;
    emailError.innerText = "Enter a valid email";
  } else {
    emailError.innerText = "";
  }
  if (numberValue.length < 10) {
    success = false;
    numberError.innerText = "Number should be atleast 10 number's";
  } else {
    numberError.innerText = "";
  }
  return success;
};
