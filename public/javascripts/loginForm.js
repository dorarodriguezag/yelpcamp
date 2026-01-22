(function () {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation.login-form');

  forms.forEach(form => {
    const usernameInput = form.querySelector('#username');
    const passwordInput = form.querySelector('#password');

    if (!usernameInput || !passwordInput) return;

    // Validate username: letters, numbers, underscore; 8-20 chars
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

    // Validate password: letters + number, 8-20 chars
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

    // Live validation
    usernameInput.addEventListener('input', validateUsername);
    usernameInput.addEventListener('blur', validateUsername);

    passwordInput.addEventListener('input', validatePassword);
    passwordInput.addEventListener('blur', validatePassword);

    // On submit
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const isUsernameValid = validateUsername();
      const isPasswordValid = validatePassword();

      if (!isUsernameValid || !isPasswordValid) {
        form.classList.remove('was-validated'); // avoid green checkmarks for invalid
        return; // stop submission
      }

      form.classList.add('was-validated');
      form.submit();
    });
  });
})();
