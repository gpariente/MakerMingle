// Function to open Login popup
function openPopupLogin() {
  // Close SignUp popup if it's open
  document.getElementById("overlaysignup").classList.remove("flex");
  document.getElementById("overlaysignup").classList.add("hidden");
  // Open Login popup
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("overlay").classList.add("flex");
  // Close burger menu
  document.getElementById("navLinks").classList.add("hidden");
  document.getElementById("navLinks").classList.remove("flex");
}

// Function to close Login popup
function closePopupLogin() {
  // Close Login popup
  document.getElementById("overlay").classList.remove("flex");
  document.getElementById("overlay").classList.add("hidden");
}

// Function to open SignUp popup
function openPopupSignUp() {
  // Close Login popup if it's open
  document.getElementById("overlay").classList.remove("flex");
  document.getElementById("overlay").classList.add("hidden");
  // Open SignUp popup
  document.getElementById("overlaysignup").classList.remove("hidden");
  document.getElementById("overlaysignup").classList.add("flex");
  // Close burger menu
  document.getElementById("navLinks").classList.add("hidden");
  document.getElementById("navLinks").classList.remove("flex");
}

// Function to close SignUp popup
function closePopupSignUp() {
  // Close SignUp popup
  document.getElementById("overlaysignup").classList.remove("flex");
  document.getElementById("overlaysignup").classList.add("hidden");
}

// Function to toggle navigation links
function toggleNav() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.classList.contains("hidden")) {
    navLinks.classList.remove("hidden");
    navLinks.classList.add("flex");
    navLinks.classList.add("flex-col"); // Stack vertically on small screens
    navLinks.classList.add("absolute"); // Position it below the burger menu
    navLinks.classList.add("bg-white"); // Ensure background matches header
    navLinks.classList.add("w-full"); // Full width
    navLinks.classList.add("left-0"); // Align to the left
    navLinks.classList.add("top-full"); // Position it right below the header
  } else {
    navLinks.classList.add("hidden");
    navLinks.classList.remove("flex");
    navLinks.classList.remove("flex-col");
    navLinks.classList.remove("absolute");
    navLinks.classList.remove("bg-white");
    navLinks.classList.remove("w-full");
    navLinks.classList.remove("left-0");
    navLinks.classList.remove("top-full");
  }
}

// Function to login
function login(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form element
  const form = event.target;

  // Create a FormData object from the form
  const formData = new FormData(form);

  // Get the email and password values
  const email = formData.get("username");
  const password = formData.get("password");

  fetch("http://localhost:3000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.access_token) {
        localStorage.setItem("userLoginToken", data.access_token);
        updateUI();
        closePopupLogin();
      } else {
        console.log(data);
        alert('Incorrect email or password.');
        // Handle login failure
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle any errors that occurred during the fetch
    });

  // Return false to prevent the default form submission
  return false;
}

// Function to handle signup
function signup(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form element
  const form = event.target;

  // Create a FormData object from the form
  const formData = new FormData(form);

  // Get the user details
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("username");
  const password = formData.get("password");

  fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.message) {
        // Automatically log the user in after successful signup
        login({ preventDefault: () => {}, target: form });
        closePopupSignUp();
      } else {
        alert(data.message);
        // Handle signup failure
      }

    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle any errors that occurred during the fetch
    });

  // Return false to prevent the default form submission
  return false;
}

function updateUI() {
  const isLoggedIn = localStorage.getItem("userLoginToken") !== null;
  const loginButtonFullPage = document.getElementById("loginFullPage");
  const signUpButtonFullPage = document.getElementById("signUpFullPage");
  const logoutButtonFullPage = document.getElementById("logoutButtonFullPage"); // Add this button in your HTML
  const loginButtonMobile = document.getElementById("loginMobile");
  const signUpButtonMobile = document.getElementById("signUpMobile");
  const logoutButtonMobile = document.getElementById("logoutButtonMobile"); // Add this button in your HTML

  if (isLoggedIn) {
    loginButtonFullPage.style.display = "none";
    signUpButtonFullPage.style.display = "none";
    logoutButtonFullPage.style.display = "block";
    loginButtonMobile.style.display = "none";
    signUpButtonMobile.style.display = "none";
    logoutButtonMobile.style.display = "block";
  } else {
    loginButtonFullPage.style.display = "block";
    signUpButtonFullPage.style.display = "block";
    logoutButtonFullPage.style.display = "none";
    loginButtonMobile.style.display = "block";
    signUpButtonMobile.style.display = "block";
    logoutButtonMobile.style.display = "none";
  }
}

function logout() {
  localStorage.removeItem("userLoginToken");
  updateUI();
}

document.addEventListener("DOMContentLoaded", updateUI);
