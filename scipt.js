const form = document.getElementById('form');
const fname = document.getElementById('first-name');
const lname = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault ();


    var firstName =  fname.value.trim();
    var lastName =  lname.value.trim();
    var firstName =  email.value.trim();
    var passwordValue =  password.value.trim();

     
})