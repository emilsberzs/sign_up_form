function confirmPasswordsMatch() {
    let pw = document.getElementById('password').value
    let pwc = document.getElementById('confirm-password').value
    console.log(pw, pwc)

    if (pw != pwc) {
        return alert("Passwords don't match, try again");
    }
}

let button = document.querySelector('#submit-button');
button.addEventListener('click', function () { confirmPasswordsMatch() });