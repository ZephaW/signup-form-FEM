
document.querySelector("#submit-button").addEventListener("click", function (event){
    event.preventDefault();

const fname = document.getElementById('first-name');
const lname = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const ErrorFirstName = document.getElementById("firstNameError");
const ErrorFirstNameIcon = document.getElementById("fNameErrorIcon");


if(fname.value.trim() ==="") {
    ErrorFirstName.style.display = "block";
    ErrorFirstNameIcon.style.display = "block";
    fname.classList.add("error-border");
} else {
    ErrorFirstName.style.display = "none";
    ErrorFirstNameIcon.style.display = "none";
    fname.classList.remove("error-border");
}


const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email validation
})
