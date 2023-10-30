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

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.font = "40px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "center";

var text = "Coding is FUN!";

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var centerX = canvasWidth / 2;
var centerY = canvasHeight / 2;

ctx.fillText(text, centerX, centerY);