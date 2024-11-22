var firstName=document.getElementById('firstName');
var lastName=document.getElementById('lastName');
var email=document.getElementById("email");
var password = document.getElementById('password');
var checkPassword = document.getElementById("checkPassword");
var submit = document.getElementById('submit');
var nameRe=/[a-zA-z]{3,7}/;
var emailRe=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
var passwordRe=/[0-9]{8,20}/;
function validate() {
    const firstNameValue=firstName.value.trim();
    const lastNameValue=lastName.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const checkPasswordValue=checkPassword.value.trim();
    if (!emailRe.test(emailValue) || !nameRe.test(firstNameValue) || !nameRe.test(lastNameValue) || !passwordRe.test(passwordValue) || passwordValue !== checkPasswordValue) {
        submit.disabled=true;
    }else{
        submit.disabled=false
        submit.addEventListener("click",function () {
        window.open('../../index.html')
        })
    }
}
firstName.addEventListener('input',validate);
lastName.addEventListener('input',validate);
email.addEventListener('input',validate);
password.addEventListener('input',validate);
checkPassword.addEventListener('input',validate);
