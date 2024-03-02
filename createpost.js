document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('uploadForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        const formData = new FormData(this); // 'this' refers to the form
        const title = formData.get("projectName");
        const description = formData.get("description");
        const materials = formData.get("materials");
        const process = formData.get("process");
        const tags = formData.get("hashtags");
        const imageUrl = formData.get("image");
      
        fetch("http://localhost:3000/post", {
            method: 'POST',
            body: formData, // FormData will be sent as multipart/form-data
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Handle success response
            }
            throw new Error('Network response was not ok.'); // Handle server errors
        })
        .then(data => {
            console.log(data); // Success handling
            alert('Post uploaded successfully!');
            // Optionally, clear the form or redirect the user
        })
        .catch(error => {
            console.error('Error:', error); // Error handling
            alert('There was a problem with your submission: ' + error.message);
        });
    });
});