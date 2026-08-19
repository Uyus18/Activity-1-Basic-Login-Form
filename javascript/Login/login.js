// Password toggle
const passwordToggle = document.getElementById('passwordToggle');
const passwordField = document.getElementById('password');

passwordToggle.addEventListener('click', function() {
  const isPassword = passwordField.type === 'password';
  passwordField.type = isPassword ? 'text' : 'password';
  this.classList.toggle('active');
});

// Form validation & submit
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const successBanner = document.getElementById('successBanner');
  const submitBtn = e.target.querySelector('.btn-primary');

  let valid = true;

  // Reset errors
  email.classList.remove('error-field');
  password.classList.remove('error-field');
  successBanner.style.display = 'none';

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    email.classList.add('error-field');
    valid = false;
  }

  // Validate password
  if (password.value.length < 6) {
    password.classList.add('error-field');
    valid = false;
  }

  if (valid) {
    submitBtn.classList.add('loading');
    
    setTimeout(() => {
      successBanner.style.display = 'flex';
      
      setTimeout(() => {
        window.location.href = './homepage.html';
      }, 800);
    }, 1000);
  }
});

// Forgot password
document.getElementById('forgotLink').addEventListener('click', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (email) {
    alert(`Password reset instructions will be sent to: ${email}`);
  } else {
    alert('Please enter your email address first.');
  }
});

// Sign up
document.getElementById('signupLink').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Create account page would open here.');
});
