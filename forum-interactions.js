// function setCategories(name) {
//     console.log(name)
//     fetch("http://localhost:3000/post/category", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             name: name.name
//         }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data); // Log the fetched data
//         renderPost(data); // Pass the posts data to renderPost function
//     })
//     .catch(error => console.error('Error fetching categories:', error));
// }

// function renderPost(posts) { // Change the parameter name to 'posts'
//     console.log(posts)
//     const categoryContainer = document.getElementById('postContainer');
//     posts.forEach(post => {
//         const postDiv = document.createElement('div');
//         postDiv.className = 'w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl';
//         const postLink = document.createElement('a');
//         postLink.href = `./showpost.html?id=${post._id}`;
//         const postImage = document.createElement('img');
//         postImage.src = post.imageUrl;
//         postImage.alt = 'Product';
//         postImage.className = 'h-80 w-72 object-cover rounded-t-xl';
//         const postContent = document.createElement('div');
//         postContent.className = 'px-4 py-3 w-72';
//         postLink.appendChild(postImage);
//         postDiv.appendChild(postLink);
//         postDiv.appendChild(postContent);
//         categoryContainer.appendChild(postDiv); // Change 'projectsSection' to 'categoryContainer'
//     });
// }

function setCategories(name) {
    console.log(name);
    fetch("http://localhost:3000/post/category", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name.name }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the fetched data
        renderPost(data); // Pass the posts data to renderPost function
    })
    .catch(error => console.error('Error fetching categories:', error));
}

function renderPost(posts) {
    console.log(posts);
    const postsContainer = document.getElementById('Projects'); // Updated to match the HTML id
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl m-4'; // Added margin for spacing

        const postLink = document.createElement('a');
        postLink.href = `./showpost.html?id=${post._id}`;

        const postImage = document.createElement('img');
        postImage.src = post.imageUrl;
        postImage.alt = 'Product';
        postImage.className = 'h-80 w-full object-cover rounded-t-xl'; // Changed width to 'full' to match container

        const postContent = document.createElement('div');
        postContent.className = 'px-4 py-3';

        // Assuming 'author', 'title', and 'description' are available properties
        const authorSpan = document.createElement('span');
        authorSpan.className = 'text-gray-400 mr-3 uppercase text-xs';
        const titleP = document.createElement('p');
        titleP.className = 'text-lg font-bold text-black truncate block capitalize';
        titleP.textContent = post.title;

        const descriptionP = document.createElement('p');
        descriptionP.className = 'text-md font-semibold text-black cursor-auto my-3';
        descriptionP.textContent = post.description;

        postContent.appendChild(authorSpan);
        postContent.appendChild(titleP);
        postContent.appendChild(descriptionP);

        // Append children to postDiv
        postLink.appendChild(postImage);
        postDiv.appendChild(postLink);
        postDiv.appendChild(postContent);
        postsContainer.appendChild(postDiv);
    });
}