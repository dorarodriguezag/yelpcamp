(function () {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation.campground-form');

  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    const fileInput = form.querySelector('input[type="file"]');
    const descriptionInput = form.querySelector('#description');

    inputs.forEach(input => {
      if (input.type === 'file') return;

      input.addEventListener('blur', () => {
        validateField(input);
      });

      input.addEventListener('input', () => {
        validateField(input);
      });

      inputs.forEach(input => {
        if (input.type === 'file') return;

        input.addEventListener('blur', () => {
          validateField(input);
        });

        input.addEventListener('input', () => {
          validateField(input);
        });
      });

      if (descriptionInput) {
        descriptionInput.addEventListener('input', () => {
          const value = descriptionInput.value.trim();

          if (value === '') {
            descriptionInput.setCustomValidity('');
            descriptionInput.classList.remove('is-invalid');
            descriptionInput.classList.remove('is-valid');
            return;
          }

          if (!/[a-zA-Z]/.test(value)) {
            descriptionInput.setCustomValidity(
              'Description must contain letters, not only numbers.'
            );
            descriptionInput.classList.add('is-invalid');
            descriptionInput.classList.remove('is-valid');
          } else {
            descriptionInput.setCustomValidity('');
            descriptionInput.classList.remove('is-invalid');
            descriptionInput.classList.add('is-valid');
          }
        });
      }


    });

    form.addEventListener('submit', event => {
      let formIsValid = true;

      if (!form.checkValidity()) {
        formIsValid = false;
      }

      if (fileInput) {
        if (fileInput.files.length === 0) {
          fileInput.classList.add('is-invalid');
          fileInput.classList.remove('is-valid');
          formIsValid = false;
        } else {
          fileInput.classList.remove('is-invalid');
          fileInput.classList.add('is-valid');
        }
      }

      if (!formIsValid) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    });

    if (fileInput) {
      fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
          fileInput.classList.remove('is-invalid');
          fileInput.classList.add('is-valid');
        }
      });
    }
  });

  function validateField(field) {
    const value = field.value?.trim?.();

    if (value === '') {
      field.classList.remove('is-invalid');
      field.classList.remove('is-valid');
      return;
    }

    if (!field.checkValidity()) {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
    } else {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
    }
  }
})();
