const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    let messages = [];
    if (firstName.value === '') {
        messages.push('First Name cannot be empty');
    }
    if (lastName.value === '') {
        messages.push('Last Name cannot be empty');
    }
    if (email.value === '') {
        messages.push('Looks like this not not an Email');
    }
    if (password.value === '') {
        messages.push('Password cannot be empty');
    }

    // Display the messages to the user
    if (messages.length > 0) {
        e.preventDefault();
        alert(messages.join('\n'));
    }
});
