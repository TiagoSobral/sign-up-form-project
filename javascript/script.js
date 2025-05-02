const allInput = document.querySelectorAll("input");

for (value of allInput) {
    value.setAttribute("required","");
}

const label = document.querySelectorAll("label");

for (value of label) {
    value.textContent = value.textContent.toUpperCase();
}

const userName = document.querySelectorAll(".name input")

for (value of userName) {
    value.setAttribute("maxlength", "10");
    value.setAttribute("minlength", "1");
}

userName[0].setAttribute("placeholder", "Given Name");
userName[1].setAttribute("placeholder", "Family Name");

const email = document.querySelector("input[type='email']");
email.setAttribute("placeholder", "your@example.com");

const mobile = document.querySelector("input[type='tel']");
mobile.setAttribute("placeholder", "xxx-xxx-xxxx");
mobile.setAttribute("pattern", "[0-9]{3}[ -.][0-9]{3}[ -.][0-9]{4}");

const password = document.querySelector("#user-pass");
const confirmPassword = document.querySelector("#user-pass-confirm");
password.setAttribute("pattern", "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}");
confirmPassword.setAttribute("pattern", "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}");

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Password doesn't match");
    }
    else if (confirmPassword.value === password.value) {
        confirmPassword.setCustomValidity("");
    } 
});

