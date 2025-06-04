<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    form {
      max-width: 400px;
      margin: auto;
    }
    input, textarea, button {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      font-size: 16px;
    }
    .error {
      color: red;
      font-size: 14px;
    }
    .success {
      color: green;
      font-size: 16px;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <form id="contactForm" novalidate>
    <h2>Contact Us</h2>
    <input type="text" id="name" placeholder="Your Name" />
    <div id="nameError" class="error"></div>

    <input type="email" id="email" placeholder="Your Email" />
    <div id="emailError" class="error"></div>

    <textarea id="message" placeholder="Your Message" rows="5"></textarea>
    <div id="messageError" class="error"></div>

    <button type="submit">Submit</button>
    <div id="formSuccess" class="success"></div>
  </form>

  <script>
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Clear previous messages
      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
      formSuccess.textContent = '';

      let isValid = true;

      // Name validation
      if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
      }

      // Email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
      } else if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Enter a valid email address.';
        isValid = false;
      }

      // Message validation
      if (message.value.trim() === '') {
        messageError.textContent = 'Message is required.';
        isValid = false;
      }

      // If valid, show success message
      if (isValid) {
        formSuccess.textContent = 'Form submitted successfully!';
        form.reset();
      }
    });
  </script>

</body>
</html>