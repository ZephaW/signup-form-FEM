const form = document.getElementById('first-name');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents form from submitting
    validateinputs();
});

const setErrorFor = (element, message) => {
    // Add code to set error message and class for the element
};

const setSuccessFor = (element) => {
    // Add code to set success class for the element
};

function validateinputs() {
    //get values from the inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be blank');
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be blank');
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }
}




function validateinputs() {
    //get values from the inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    if(firstNameValue === '') {
        //show error
        //add error class
        setErrorFor(firstName, 'First Name cannot be blank');
    } else {
        //add success class
        setSuccessFor(firstName);
    }
    
    if(lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be blank');
    } else {
        setSuccessFor(lastName);
    }
    
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    
    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }
}


//.trim() removes whitespace from both sides of a string