// Get the login and signup buttons
let btn1 = document.getElementById("loginBtn");
let btn2 = document.getElementById("signupBtn");

// Get the login and signup elements
let signIn = document.getElementById("login");
let signUp = document.getElementById("signup");

// Add event listener to signup button
btn2.addEventListener("click", function() {
  // Hide the login element
  signIn.style.display = "none";
  // Show the signup element
  signUp.style.display = "block";
})

// Add event listener to login button
btn1.addEventListener("click", function() {
  // Hide the signup element
  signUp.style.display = "none";
  // Show the login element
  signIn.style.display = "block";
})
