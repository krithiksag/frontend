// Run validation when the form is modified
function validateForm() {
  let formElement = document.querySelector('#signupForm');
  let emailIsValid = validateEmail();
  let passwordIsValid = validatePassword();

  if (emailIsValid && passwordIsValid) {
      let successMessage = document.createElement('p');
      successMessage.classList.add('success');
      successMessage.innerText = `All good to go!`;

      formElement.appendChild(successMessage);
  }
}

// Validate email and show error if necessary
function validateEmail() {
  let emailInput = document.getElementById("userEmail").value;
  let emailError = document.querySelector('#emailMessage');
  
  if (emailInput.length > 2 && emailInput.includes('@') && emailInput.includes('.')) {
      emailError.style.display = `none`;
      return true;
  } else {
      emailError.style.display = `block`;
      return false;
  }
}

// Validate password and show error if necessary
function validatePassword() {
  let passwordInput = document.getElementById('userPassword').value;
  let passwordError = document.getElementById('passwordMessage');

  if (passwordInput.length > 7) {
      passwordError.style.display = `none`;
      return true;
  } else {
      passwordError.style.display = `block`;
      return false;
  }
}

// Confirm submission with user
function submitConfirmation() {
  let userConfirmed = window.confirm('Are you sure you want to submit?');

  if (userConfirmed) {
      alert("successful signup!");
  } else {
      location.reload();
  }
}
