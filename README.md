# SneakerHub

## Overview

- SneakerHub is a React-based sneaker management and shopping application designed to help users explore, organize, and manage sneaker products. The platform provides an interactive shopping experience while also supporting administrator functionality for adding and editing products.
- The application was built using React and modern frontend development practices, including component-based architecture, state management with hooks, routing, testing with React Testing Library, and version control with Git/GitHub.
- The backend of the project was simulated through the use of a db.json file. 

## Features

### User Features

* Browse sneaker products
* View product details
* Search and filter products
* Add products to cart

### Administrator Features

* Add new sneaker products
* Edit existing sneaker products
* Delete existing sneaker products both from the front-and backend
* Manage product information

### Additional Features

* Responsive UI styling
* Component-based architecture
* Dynamic rendering using React props and state
* Unit testing using Vitest and React Testing Library

## Technologies Used

* React
* Vite
* JavaScript
* CSS
* React Router DOM
* React Testing Library
* Git & GitHub

## Installation and Setup

- Clone my github repository - ([[github repo](https://github.com/Celline-SD17/Personal-Project-Showcase-App.git)])

- Install necessary dependencies:
        -npm install

- The development server can be run through the command: npm run server.
- To get the local host link to the browser, run command: npm run dev.

## Running Tests
- To test for functionality run the command npm test.https://personal-project-showcase-app-9j4s.vercel.app/
## Project Functionality
- The application follows a component-based structure where data flows from parent components to child components through props.
- Users can interact with sneaker products while administrators have additional permissions for product management including adding new products or deleting products.
- For state management 2 hooks were utilized: 
    * useState()
    * useEffect()
## Component Tree

App
│
├── Navbar
│
├── Home
│
├── ProductList
│   │
│   └── ProductCard
│
├── ProductForm
│
├── Cart
│
└── Footer

## Testing Strategy
- The application includes unit tests for key functionalities.

### Tested Components

* ProductList renders sneaker products correctly
* ProductCard displays product information
* The search bar filters products effectively
* Route navigation is seamless
* ProductForm supports editing existing products

## Git Workflow Used
- Several git branches were used to develop different functionalities such as: 
1. Developing the admin's side for product management.
2. Developing tests.
3. Styling
- They were later merged to the main branch and deleted. 

## Author
- The project was developed as part of a React learning project.
## License
- This project is mainly for educational purposes but can be used in e-commerce for business purposes.
