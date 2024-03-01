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
      console.log(data);

      closePopupLogin();
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle any errors that occurred during the fetch
    });

  // Return false to prevent the default form submission
  return false;
}
