/* Put code for the task below */
const nameField = document.getElementById('fullName');
const addressField = document.getElementById('address')
const phoneField = document.getElementById('phone');
const emailField = document.getElementById('email');
function task5Submit(){
    if(nameField === ""){
        nameField.style.background = "red";
    }
    if(emailField === ""){
        emailField.style.background = "red";
    }
    if(phoneField === ""){
        phoneField.style.background = "red";
    }
    if(addressField === ""){
        emailField.style.background = "red";
    }
}