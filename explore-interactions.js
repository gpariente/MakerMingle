function getCategories() {
    fetch("http://localhost:3000/category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Log the fetched data
      renderCategories(data); // Call renderCategories with the fetched data
    })
    .catch(error => console.error('Error fetching categories:', error));
}
  
  // Render categories on the page
function renderCategories(categories) {
    const categoryContainer = document.getElementById('categoryContainer');
    categories.forEach(category => {
      const categoryElement = document.createElement('a');
      categoryElement.setAttribute('data-id', category._id); // Use the category's _id as a data attribute
      categoryElement.setAttribute('data-name', category.name); // Also, save the name
      categoryElement.href = "./forum.html";
      categoryElement.classList.add('group', 'relative', 'flex', 'h-48', 'items-end', 'overflow-hidden', 'rounded-lg', 'bg-gray-100', 'shadow-lg', 'md:h-80');
      
      const imgElement = document.createElement('img');
      imgElement.src = category.imageUrl; // Set the source of the image
      imgElement.alt = "Category Image"; // Alt text for the image
      imgElement.classList.add('absolute', 'inset-0', 'h-full', 'w-full', 'object-cover', 'object-center', 'transition', 'duration-200', 'group-hover:scale-110');
      
      const gradientElement = document.createElement('div');
      gradientElement.classList.add('pointer-events-none', 'absolute', 'inset-0', 'bg-gradient-to-t', 'from-gray-800', 'via-transparent', 'to-transparent', 'opacity-50');
      
      const spanElement = document.createElement('span');
      spanElement.textContent = category.name; // Set the category name
      spanElement.classList.add('relative', 'ml-4', 'mb-3', 'inline-block', 'text-sm', 'text-white', 'md:ml-5', 'md:text-lg');
      
      categoryElement.appendChild(imgElement);
      categoryElement.appendChild(gradientElement);
      categoryElement.appendChild(spanElement);
      
      // Attach a click event listener to the category element
      categoryElement.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        saveCategoryChoice(this.getAttribute('data-id'), this.getAttribute('data-name')); // Save the user's choice
      });
      
      categoryContainer.appendChild(categoryElement); // Append the category element to the container
    });
  }
  
  // Save the user's category choice to localStorage
  function saveCategoryChoice(id, name) {
    const categoryChoice = { id, name };
    localStorage.setItem('userCategoryChoice', JSON.stringify(categoryChoice)); // Serialize the object to a string and save it
    console.log('Saved category choice:', categoryChoice);
    window.location.href = './forum.html';
  }
  
  // Event listener to fetch and display categories once the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    getCategories(); // Fetch and render categories
  });
  