document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const errorContainer = document.getElementById('errorMessages');

    function showError(message) {
        const error = document.createElement('div');
        error.textContent = message;
        error.style.color = 'red';
        errorContainer.appendChild(error);
    }

    function clearErrors() {
        errorContainer.innerHTML = '';
    }

    function validateForm(event) {
        clearErrors();
        let valid = true;

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Name validation
        if (name.length < 5) {
            showError('Name must not be less than 5 characters');
            valid = false;
        }

        // Email validation
        if (!email.includes('@' && '.')) {
            showError('Email Id should have @ character and . in it');
            valid = false;
        }

        // Phone validation
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone) || phone === '123456789') {
            showError('Phone Number should be a 10-digit number and not 123456789');
            valid = false;
        }

        // Password validation
        if (password.length < 8) {
            showError('Password must be at least 8 characters long');
            valid = false;
        }
        if (password.toLowerCase() === 'password') {
            showError('Password cannot be "password"');
            valid = false;
        }
        if (password.toLowerCase() === name.toLowerCase()) {
            showError('Password cannot be the same as the name');
            valid = false;
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            showError('Password and confirm password should match');
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Successfully submitted';
            successMessage.style.color = 'green';
            errorContainer.appendChild(successMessage);
        }
    }

    if (form) {
        form.addEventListener('submit', validateForm);
    }
});
