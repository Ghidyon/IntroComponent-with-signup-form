const form = document.getElementById('register');
const firstname = document.getElementById('fname').value;
const lastname = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

form.addEventListener('submit', e => {
    e.preventDefault();


    if (firstName === '') {
        addErrorTo('firstname', 'First name cannot be empty');
    } else {
        removeErrorFrom('firstname');
    }

    if (lastName === '') {
        addErrorTo('lastname', 'Last name cannot be empty');
    } else {
        removeErrorFrom('lastname');
    }

    if (email === '') {
        addErrorTo('email', 'Email cannot be empty');
    } else if (!isValid(email)) {
        addErrorTo('email', 'Looks like this is not an email');
    } else {
        removeErrorFrom('email');
    }

    if (password === '') {
        addErrorTo('password', 'Password cannot be empty');
    } else {
        removeErrorFrom('password');
    }
});


function addErrorTo(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    small.innerText = message;
}

function removeErrorFrom(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
}

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}