document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('postForm');
    const savedCategoryChoice = localStorage.getItem('userCategoryChoice');
    const categoryChoice = JSON.parse(savedCategoryChoice);
    
    form.addEventListener('submit', function(event) {
      creatPost(categoryChoice, event);
    });
  });
  
  function creatPost(categoryChoice, event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    const title = formData.get("projectName");
    const description = formData.get("description");
    const materials = formData.get("materials");
    const process = formData.get("process");
    const category = categoryChoice.id; // Ensure categoryChoice is correctly passed
    const hashtags = formData.get("hashtags");
    let tags = hashtags.split(',');
    const imageUrl = formData.get("image");
    
    if (tags.length > 3) {
      alert('Please insert not more than 3 tags');
      return; // Stop the execution if more than 3 tags
    }
    
    // Proceed with fetch request
    fetch("http://localhost:3000/post", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, materials, process, category, tags, imageUrl }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.location.href = './explore.html';
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors, e.g., show an error message
    });
  }