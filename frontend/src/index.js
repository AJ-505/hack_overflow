function validatePauEmail(input) {
  const errorMessage = document.getElementById("email-error-message");
  const email = input.value;
  const isPauEmail = email.toLowerCase().endsWith("@pau.edu.ng");

  if (!isPauEmail) {
    input.classList.add("input-group__input--error");
    errorMessage.textContent = "Please enter a PAU email address.";
    return false;
  } else {
    input.classList.remove("input-group__input--error");
    errorMessage.textContent = "";
    return true;
  }
}

document.querySelector('form').addEventListener('submit', function(e) {
  const emailInput = document.getElementById('email');
  if (!validatePauEmail(emailInput)) {
      e.preventDefault();
  }
});
