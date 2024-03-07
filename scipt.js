
document.querySelector("#submit-button").addEventListener("click", function (event){
    event.preventDefault();

const fnameInput = document.getElementById('first-name');
const lnameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const ErrorFirstName = document.getElementById("firstNameError");
const ErrorLastName = document.getElementById("lastNameError");
const ErrorEmail = document.getElementById("emailError");


const ErrorFirstNameIcon = document.getElementById("fNameErrorIcon");
const ErrorLastNameIcon = document.getElementById("lNameErrorIcon");
const ErrorEmailIcon = document.getElementById("emailErrorIcon");

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email validation
if(fnameInput.value.trim() ==="") {
    ErrorFirstName.style.display = "block";
    ErrorFirstNameIcon.style.display = "block";
    fnameInput.classList.add("error-border");
} else {
    ErrorFirstName.style.display = "none";
    ErrorFirstNameIcon.style.display = "none";
    fnameInput.classList.remove("error-border");
}

if(lnameInput.value.trim() ==="") {
    ErrorLastName.style.display = "block";
    ErrorLastNameIcon.style.display = "block";
    fnameInput.classList.add("error-border");
} else {
    ErrorLastName.style.display = "none";
    ErrorLastNameIcon.style.display = "none";
    lnameInput.classList.remove("error-border");
}


if(emailInput.value.match(pattern)) {
    ErrorEmail.style.display = "none";
    ErrorEmailIcon.style.display = "none";
    emailInput.classList.remove("error-border");
} else {
    ErrorEmail.style.display = "block";
    ErrorEmailIcon.style.display = "block";
    emailInput.classList.add("error-border");
}

if (PassInput.value.trim() === "") {
    ErrorPassword.style.display = "block";
    ErrorPasswordIcon.style.display = "block";
    PassInput.classList.add("error-border");
  } else {
    ErrorPassword.style.display = "none";
    ErrorPasswordIcon.style.display = "none";
    PassInput.classList.remove("error-border");

}
})
