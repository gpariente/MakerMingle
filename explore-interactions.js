function getCategories () {
    fetch("http://localhost:3000/category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => {
    console.log(data); 
    renderCategories(data);
    })
}

function renderCategories(categories){
    const categoryContainer = document.getElementById('categoryContainer');
    categories.forEach(category => {
        const categoryElement = document.createElement('a');
        categoryElement.href = "#";
        categoryElement.classList.add('group', 'relative', 'flex', 'h-48', 'items-end', 'overflow-hidden', 'rounded-lg', 'bg-gray-100', 'shadow-lg', 'md:h-80');
          const imgElement = document.createElement('img');
          imgElement.src = category.imageUrl;
          imgElement.loading = "lazy";
          imgElement.alt = "Category Image";
          imgElement.classList.add('absolute', 'inset-0', 'h-full', 'w-full', 'object-cover', 'object-center', 'transition', 'duration-200', 'group-hover:scale-110');
    
          const gradientElement = document.createElement('div');
          gradientElement.classList.add('pointer-events-none', 'absolute', 'inset-0', 'bg-gradient-to-t', 'from-gray-800', 'via-transparent', 'to-transparent', 'opacity-50');
    
          const spanElement = document.createElement('span');
          spanElement.classList.add('relative', 'ml-4', 'mb-3', 'inline-block', 'text-sm', 'text-white', 'md:ml-5', 'md:text-lg');
          spanElement.textContent = category.name;
    
          categoryElement.appendChild(imgElement);
          categoryElement.appendChild(gradientElement);
          categoryElement.appendChild(spanElement);
    
          categoryContainer.appendChild(categoryElement);
        });
        localStorage.removeItem('exploreData');

}