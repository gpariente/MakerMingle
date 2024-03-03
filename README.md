# MakerMingle 📐

# DIY Forum Project

## Overview

Welcome to our DIY Forum project! This is a platform for DIY (Do it yourself) enthusiasts where you can explore various categories, view projects, add comments, and create new projects. The project is built using HTML, CSS, and JavaScript with Tailwind CSS for styling in the UI, and NestJS with MongoDB for the API.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [MongoDB Compass](https://www.mongodb.com/products/compass) (Optional, but recommended for managing MongoDB)

## Installation

1. Clone the repository:
   ```bash
   git clone (https://github.com/gpariente/MakerMingle)
   ```

2. Navigate to the API directory and install dependencies:
   ```bash
   cd api
   npm install
   ```

3. Navigate to the UI directory and install dependencies:
   ```bash
   cd ../ui
   npm install
   ```

## Running the Project

1. Start the MongoDB server on your machine.

2. In the API directory, run the following command to start the NestJS server:
   ```bash
   npm run start:dev
   ```

3. In the UI directory, run the following command to start the frontend:
   ```bash
   npm run start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Setting Up MongoDB

After running the NestJS server, you will see the collections created by NestJS in MongoDB. To import the initial data:

1. Open MongoDB Compass and connect to your local MongoDB server.

2. Select the database used by the NestJS application.

3. Import the `categories.json` file into the `categories` collection.

## Features

- **Login/Signup**: Securely register and authenticate users.
- **Explore**: Browse through different categories of DIY projects.
- **Comments**: Add comments to projects.
- **Create Project**: Contribute by creating new DIY projects.

## Contributing

Feel free to contribute to this project by submitting pull requests or reporting issues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

You can modify the README file as needed to fit the specifics of your project and repository structure.
