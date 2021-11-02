


const email = document.getElementById("email");
const uname = document.querySelector('#uname');

const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
  if (uname.validity.valueMissing) {
    uname.setCustomValidity('You gotta fill this out, yo!');
  } else {
    uname.setCustomValidity("");
  }
  
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Your email needs fixin. 😊");
  } else {
    email.setCustomValidity("");
  }
  
});


// -------Password toggle from w3schools
function myFunction() {
  var x = document.querySelector("#password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}