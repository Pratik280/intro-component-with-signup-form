const inputs = document.querySelectorAll("input");
const form = document.getElementById("form");

console.log(inputs[0]);
form.addEventListener("submit", (e) => {
  // e.preventDefault();
  let isvalid = true;

  let firstName = inputs[0];
  if (firstName.value === "" || firstName.value == null) {
    isvalid = false;
    firstName.nextElementSibling.classList.toggle("hidden");
    firstName.placeholder = "";
    firstName.classList.toggle("form-valid");
    firstName.classList.toggle("form-invalid");
  }

  let lastName = inputs[1];
  if (lastName.value === "" || lastName.value == null) {
    isvalid = false;
    lastName.nextElementSibling.classList.toggle("hidden");
    lastName.placeholder = "";
    lastName.classList.toggle("form-valid");
    lastName.classList.toggle("form-invalid");
  }

  let email = inputs[2];
  if (
    email.value === "" ||
    email.value == null ||
    !validateEmail(email.value)
  ) {
    isvalid = false;
    email.nextElementSibling.classList.toggle("hidden");
    email.placeholder = "";
    email.classList.toggle("form-valid");
    email.classList.toggle("form-invalid");
  }

  let password = inputs[3];
  console.log(password.value);
  if (password.value === "" || password.value == null) {
    isvalid = false;
    password.nextElementSibling.classList.toggle("hidden");
    password.placeholder = "";
    password.classList.toggle("form-valid");
    password.classList.toggle("form-invalid");
  }

  if (isvalid) {
    form.submit();
  } else {
    e.preventDefault();
  }
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
