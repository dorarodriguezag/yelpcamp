(function () {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation.review-form');

  forms.forEach(form => {
    const reviewInput = form.querySelector('textarea[name="review[body]"]');
    if (!reviewInput) return;

    const validateReview = () => {
      const value = reviewInput.value.trim();

      reviewInput.classList.remove('is-valid', 'is-invalid');

      if (value === '' || value.length < 3 || value.length > 1000 || !/[a-zA-Z]/.test(value)) {
        reviewInput.classList.add('is-invalid');
        return false;
      } else {
        reviewInput.classList.add('is-valid');
        return true;
      }
    };

    reviewInput.addEventListener('input', validateReview);
    reviewInput.addEventListener('blur', validateReview);

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const isValid = validateReview(); 
      if (!isValid) {
        form.classList.remove('was-validated'); 
        return;
      }

      form.classList.add('was-validated');
      form.submit();
    });
  });
})();
