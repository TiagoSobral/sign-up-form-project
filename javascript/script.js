
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

