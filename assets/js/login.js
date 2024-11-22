var email = document.getElementById('inputEmail');
var password = document.getElementById('inputPassword');
var submit = document.getElementById('loginSubmit');
var emailRe=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
function validate() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (emailValue===""||passwordValue===""||passwordValue.length<8||!emailRe.test(emailValue)) {
        submit.disabled=true;
    }else{
        submit.disabled=false;
        submit.addEventListener("click",function () {
            window.open('../../index.html')
        })
    }
}
email.addEventListener("input",validate);
password.addEventListener("input",validate);
