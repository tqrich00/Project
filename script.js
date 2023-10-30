document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('myForm');
  var existingUsernames = ['Admin', 'Harry', 'Elizabeth', 'Shana'];

  form.addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var username = document.getElementById('username').value;

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      event.preventDefault();
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      event.preventDefault();
      return;
    }

    if (existingUsernames.includes(username)) {
          alert('Username is already taken. Please choose a different one.');
          event.preventDefault();
        }
      });
    });