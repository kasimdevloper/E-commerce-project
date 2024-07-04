 function validateForm() {
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var message = document.getElementById('message').value;

            // Simple validation
            if (firstName === '' || lastName === '' || email === '' || phone === '' || message === '') {
                alert('Please fill in all fields');
                return;
            }

            // Email validation using a regular expression
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Phone number validation using a regular expression
            var phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone)) {
                alert('Please enter a valid 10-digit phone number');
                return;
            }

            // If all validations pass, you can proceed to submit the form or take other actions
            alert('Form submitted successfully!');
            // document.getElementById('enquiryForm').submit(); // Uncomment this line to submit the form
        }