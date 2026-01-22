(function () {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation.register-form');

  forms.forEach(form => {
    const usernameInput = form.querySelector('#username');
    const emailInput = form.querySelector('#email');
    const passwordInput = form.querySelector('#password');

    if (!usernameInput || !emailInput || !passwordInput) return;

    const validateUsername = () => {
      const value = usernameInput.value.trim();
      usernameInput.classList.remove('is-valid', 'is-invalid');

      const usernameRegex = /^[a-zA-Z0-9_]+$/;
        if (!usernameRegex.test(value)) {
          usernameInput.classList.add('is-invalid');
          return false;
        }

      if (value.length < 8 || value.length > 20) {
        usernameInput.classList.add('is-invalid');
        return false;
      }

      usernameInput.classList.add('is-valid');
      return true;
    };

    const validateEmail = () => {
      const value = emailInput.value.trim();
      emailInput.classList.remove('is-valid', 'is-invalid');

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        emailInput.classList.add('is-invalid');
        return false;
      }

      if (value.length < 8 || value.length > 40) {
        emailInput.classList.add('is-invalid');
        return false;
      }

      emailInput.classList.add('is-valid');
      return true;
    };

    const validatePassword = () => {
      const value = passwordInput.value.trim();
      passwordInput.classList.remove('is-valid', 'is-invalid');

      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
      if (!passwordRegex.test(value)) {
        passwordInput.classList.add('is-invalid');
        return false;
      }

      if (value.length < 8 || value.length > 20) {
        passwordInput.classList.add('is-invalid');
        return false;
      }

      passwordInput.classList.add('is-valid');
      return true;
    };

    usernameInput.addEventListener('input', validateUsername);
    usernameInput.addEventListener('blur', validateUsername);

    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('blur', validateEmail);

    passwordInput.addEventListener('input', validatePassword);
    passwordInput.addEventListener('blur', validatePassword);

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const isUsernameValid = validateUsername();
      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();

      if (!isUsernameValid || !isEmailValid || !isPasswordValid) {
        form.classList.remove('was-validated');
        return; 
      }

      form.classList.add('was-validated');
      form.submit();
    });
  });
})();
