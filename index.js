var form = document.getElementsByTagName('form')[0];
var email = document.getElementById('user-email');
var error = document.getElementsByClassName('error')[0];

const resetFields = function () {
  error.innerHTML = "";
  error.style.display = "none";
}

const errorFields = function () {
  error.innerHTML = "Please provide a valid email address";
  error.style.display = "block";
}

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    resetFields();
  }
  else {
    errorFields();
  }
});

form.addEventListener("submit", function (event) {
  if(!email.validity.valid) {
    errorFields();
  }
  else {
    alert(`Your email is ${email.value}`);
  }
});





