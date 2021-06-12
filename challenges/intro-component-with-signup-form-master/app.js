// alert("working");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// if button gets clicked, check if fields are filled
document.getElementById("button").addEventListener("click", checkForm);

function checkForm() {

// check if first name is filled
  if (firstName.value.length == 0) {
    firstName.style.borderColor = "hsl(0, 100%, 74%)";
    firstName.style.background = "url('public/images/icon-error.svg') 90% 50% no-repeat";
    document.getElementById("errorFirst").innerHTML = "First Name cannot be empty";
  }
  else {
    console.log(firstName);
  }

// check if last name is filled
  if (lastName.value.length == 0) {
    lastName.style.borderColor = "hsl(0, 100%, 74%)";
    lastName.style.background = "url('public/images/icon-error.svg') 90% 50% no-repeat";
    document.getElementById("errorLast").innerHTML = "Last Name cannot be empty";
  }
  else {
    console.log(lastName);
  }

// check if email is filled & if so, if it is filled in the correct format
  if (email.value.length == 0) {
    email.style.borderColor = "hsl(0, 100%, 74%)";
    email.style.background = "url('public/images/icon-error.svg') 90% 50% no-repeat";
    document.getElementById("errorEmail").innerHTML = "Email cannot be empty";
  }
  else if (!email.value.match(/mailformat/)) {
    email.style.borderColor = "hsl(0, 100%, 74%)";
    email.style.background = "url('public/images/icon-error.svg') 90% 50% no-repeat";
    document.getElementById("errorEmail").innerHTML = "Looks like this is not an email";
  }
  else {
    console.log(email);
  }

// check if password is filled
  if (password.value.length == 0) {
    password.style.borderColor = "hsl(0, 100%, 74%)";
    password.style.background = "url('public/images/icon-error.svg') 90% 50% no-repeat";
    document.getElementById("errorPW").innerHTML = "Password cannot be empty";
  } else {
    console.log("Password filled out!");
  }

};
