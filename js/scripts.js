// User Interface Logic
const surveyForm = document.getElementById('userInfo')
let messageDiv = document.getElementById('messageDiv')
messageDiv.innerHTML = "";
console.log(surveyForm)
if (surveyForm !== null) {
    surveyForm.addEventListener('submit', submitForm);
}

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        hideResults();
        event.preventDefault();



