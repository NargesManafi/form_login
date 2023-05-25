
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

nameInput.addEventListener("change", validateName);
emailInput.addEventListener("change", validateEmail);
passwordInput.addEventListener("change", validatePassword);

function validateName() {
  const nameValue = nameInput.value.trim();
  const nameError = document.getElementById("nameError");
  if (nameValue === "") {
    nameError.textContent = "نام را وارد کنید";
    nameInput.style.border = "2px solid red";
  } else if (nameValue.length > 15) {
    nameError.textContent = "نام باید کمتر از 15 کاراکتر باشد";
    nameInput.style.border = "2px solid red";
  } else if (!/^[a-zA-Z]+$/.test(nameValue)) {
    nameError.textContent = "نام فقط باید شامل حروف انگلیسی باشد";
    nameInput.style.border = "2px solid red";
  } else {
    nameError.textContent = "";
    nameInput.style.border = "2px solid #ccc";
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailError = document.getElementById("emailError");
  if (emailValue === "") {
    emailError.textContent = "ایمیل را وارد کنید";
    emailInput.style.border = "2px solid red";
  } else if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
    emailError.textContent = "ایمیل را به درستی وارد کنید";
    emailInput.style.border = "2px solid red";
  } else {
    emailError.textContent = "";
    emailInput.style.border = "2px solid #ccc";
  }
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();
  const passwordError = document.getElementById("passwordError");
  if (passwordValue === "") {
    passwordError.textContent = "پسورد را وارد کنید";
    passwordInput.style.border = "2px solid red";
  } else if (passwordValue.length <8) {
    passwordError.textContent = "  پسورد باید حداقل 8 کاراکتر باشد";
    passwordInput.style.border = "2px solid red";
  } else if (!/[a-z]/.test(passwordValue) || !/[A-Z]/.test(passwordValue) || !/[0-9]/.test(passwordValue)) {
    passwordError.textContent = "پسورد باید شامل حروف کوچیک و بزرگ و اعداد باشد";
    passwordInput.style.border = "2px solid red";
  } else {
    passwordError.textContent = "";
    passwordInput.style.border = "2px solid #ccc";
  }
} 

