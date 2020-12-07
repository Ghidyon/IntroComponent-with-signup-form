
const form = document.getElementById('register');

form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['fname'].value;
    const lastName = form['lname'].value;
    const email = form['email'].value;
    const password = form['password'].value;


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


function addErrorTo(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    small.innerText = message;
}

function removeErrorFrom(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
}

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}