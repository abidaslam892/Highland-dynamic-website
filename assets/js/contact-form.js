// Enhanced Contact Form Functionality
(function() {
    'use strict';

    const form = document.getElementById('contactForm');
    
    if (!form) return;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Phone validation regex (flexible format)
    const phoneRegex = /^[\d\s\-\+\(\)\.]+$/;

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Validate on blur
        input.addEventListener('blur', function() {
            validateField(this);
        });

        // Clear validation on focus
        input.addEventListener('focus', function() {
            this.classList.remove('invalid', 'valid');
        });

        // Real-time validation for email
        if (input.type === 'email') {
            input.addEventListener('input', function() {
                if (this.value.length > 3) {
                    validateField(this);
                }
            });
        }
    });

    // Validate individual field
    function validateField(field) {
        const value = field.value.trim();
        const isRequired = field.hasAttribute('required');

        // Check if required field is empty
        if (isRequired && !value) {
            field.classList.add('invalid');
            field.classList.remove('valid');
            return false;
        }

        // Email validation
        if (field.type === 'email' && value) {
            if (emailRegex.test(value)) {
                field.classList.add('valid');
                field.classList.remove('invalid');
                return true;
            } else {
                field.classList.add('invalid');
                field.classList.remove('valid');
                return false;
            }
        }

        // Phone validation (if filled)
        if (field.type === 'tel' && value) {
            if (phoneRegex.test(value) && value.length >= 10) {
                field.classList.add('valid');
                field.classList.remove('invalid');
                return true;
            } else {
                field.classList.add('invalid');
                field.classList.remove('valid');
                return false;
            }
        }

        // Text validation
        if ((field.type === 'text' || field.tagName === 'TEXTAREA') && isRequired && value) {
            if (value.length >= 2) {
                field.classList.add('valid');
                field.classList.remove('invalid');
                return true;
            } else {
                field.classList.add('invalid');
                field.classList.remove('valid');
                return false;
            }
        }

        // Select validation
        if (field.tagName === 'SELECT' && value) {
            field.classList.add('valid');
            field.classList.remove('invalid');
            return true;
        }

        // If not required and empty, it's valid
        if (!isRequired && !value) {
            field.classList.remove('invalid', 'valid');
            return true;
        }

        // Default valid state for filled non-required fields
        if (!isRequired && value) {
            field.classList.add('valid');
            field.classList.remove('invalid');
            return true;
        }

        return true;
    }

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Remove any existing messages
        const existingMessages = form.querySelectorAll('.form-success-message, .form-error-message');
        existingMessages.forEach(msg => msg.remove());

        // Validate all required fields
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        if (!isValid) {
            // Show error message
            const errorMsg = document.createElement('div');
            errorMsg.className = 'form-error-message show';
            errorMsg.textContent = 'Please fill in all required fields correctly.';
            form.insertBefore(errorMsg, form.firstChild);
            
            // Scroll to first invalid field
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) {
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalid.focus();
            }
            
            return;
        }

        // Show loading state
        form.classList.add('loading');
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'SENDING...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual submission logic)
        setTimeout(function() {
            // Success
            form.classList.remove('loading');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'form-success-message show';
            successMsg.innerHTML = '<strong>Thank you!</strong> Your message has been sent successfully. We\'ll get back to you within 24 hours.';
            form.insertBefore(successMsg, form.firstChild);

            // Reset form
            form.reset();
            inputs.forEach(input => {
                input.classList.remove('valid', 'invalid');
            });

            // Scroll to success message
            successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Remove success message after 8 seconds
            setTimeout(function() {
                successMsg.classList.remove('show');
                setTimeout(() => successMsg.remove(), 500);
            }, 8000);

        }, 1500); // Simulated delay

        // ACTUAL IMPLEMENTATION:
        // Replace the setTimeout above with your actual form submission code
        // Example with FormSubmit, Formspree, or custom backend:
        /*
        const formData = new FormData(form);
        
        fetch('YOUR_FORM_ENDPOINT_URL', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            form.classList.remove('loading');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'form-success-message show';
            successMsg.innerHTML = '<strong>Thank you!</strong> Your message has been sent successfully.';
            form.insertBefore(successMsg, form.firstChild);
            
            form.reset();
            inputs.forEach(input => input.classList.remove('valid', 'invalid'));
        })
        .catch(error => {
            form.classList.remove('loading');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show error message
            const errorMsg = document.createElement('div');
            errorMsg.className = 'form-error-message show';
            errorMsg.textContent = 'Sorry, there was an error sending your message. Please try again.';
            form.insertBefore(errorMsg, form.firstChild);
        });
        */
    });

    // Format phone number as user types (optional enhancement)
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 3) {
                    e.target.value = '(' + value;
                } else if (value.length <= 6) {
                    e.target.value = '(' + value.slice(0, 3) + ') ' + value.slice(3);
                } else {
                    e.target.value = '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6, 10);
                }
            }
        });
    }

    // Character counter for message field (optional)
    const messageField = document.getElementById('message');
    if (messageField) {
        const minChars = 10;
        
        messageField.addEventListener('input', function() {
            const length = this.value.length;
            
            // You could add a character counter here if desired
            if (length > 0 && length < minChars) {
                this.classList.add('invalid');
                this.classList.remove('valid');
            } else if (length >= minChars) {
                this.classList.add('valid');
                this.classList.remove('invalid');
            } else {
                this.classList.remove('valid', 'invalid');
            }
        });
    }

    // Smooth scroll to form if hash is present
    if (window.location.hash === '#contact-form') {
        setTimeout(function() {
            form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

})();
