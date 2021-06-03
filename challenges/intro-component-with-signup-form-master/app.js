// alert("working");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// if button gets clicked, check if fields are filled
document.getElementById("button").addEventListener("click", checkForm);

function checkForm() {

  if (firstName.value.length == 0) {
    document.getElementById("firstName").style.borderColor = "hsl(0, 100%, 74%)";
    document.getElementById("firstName").style.background = "url('public/images/icon-error.svg') 90% 50% no-repeat";
    document.getElementById("errorFirst").innerHTML = "First Name cannot be empty";
  }
  else {
    console.log("First Name filled out!");
  }

  if (lastName.value.length == 0) {
    document.getElementById("lastName").style.borderColor = "hsl(0, 100%, 74%)";
    document.getElementById("lastName").style.background = "url('public/images/icon-error.svg') 90% 50% no-repeat";
    document.getElementById("errorLast").innerHTML = "Last Name cannot be empty";
  }
  else {
    console.log("Last Name filled out!");
  }

  if (email.value.length == 0) {
    document.getElementById("email").style.borderColor = "hsl(0, 100%, 74%)";
    document.getElementById("email").style.background = "url('public/images/icon-error.svg') 90% 50% no-repeat";
    document.getElementById("errorEmail").innerHTML = "Email cannot be empty";
  }
  else {
    console.log("Email filled out!");
  }

  if (email.value.match(mailformat)) {
    console.log("correct email format");
  } else {
    document.getElementById("email").style.borderColor = "hsl(0, 100%, 74%)";
    document.getElementById("email").style.background = "url('public/images/icon-error.svg') 90% 50% no-repeat";
    document.getElementById("errorEmail").innerHTML = "Looks like this is not an email";
  }

  if (password.value.length == 0) {
    document.getElementById("password").style.borderColor = "hsl(0, 100%, 74%)";
    document.getElementById("password").style.background = "url('public/images/icon-error.svg') 90% 50% no-repeat";
    document.getElementById("errorPW").innerHTML = "Password cannot be empty";
  } else {
    console.log("Password filled out!");
  }
  
};
