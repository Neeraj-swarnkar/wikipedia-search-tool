# Wikipedia Search Tool

This project is a Wikipedia search tool built with React using the Create React App boilerplate.
Single-page React application in TypeScript that searches and presents Wikipedia results, emphasizing swift performance and secure interactions.

## Features

The Wikipedia Search Tool includes the following features:

- Reusable Components: The application utilizes reusable UI components, making it easier to manage and maintain the codebase.

- Relevance-Based Sorting: The search results are sorted based on relevance, ensuring that the most relevant results are displayed first.

- Virtualized Lists using react-window: The application uses the react-window library to efficiently render large lists of search results, improving performance and reducing memory usage.

- Search History Tracking: The tool keeps track of the user's search history, allowing them to easily revisit previous searches.

- CSS Frameworks like Bootstrap: The application leverages CSS frameworks like Bootstrap to quickly and easily style the UI components.

- Input Debouncing: The tool implements input debouncing to reduce search latency. This means that the search request is only sent after a certain delay, reducing unnecessary API calls.

- API Response Sanitization and Security Protocols: The application sanitizes API responses using the dompurify library to prevent cross-site scripting (XSS) attacks. It also adheres to security protocols such as CORS middleware to restrict access to the API from unauthorized domains, protecting against cross-site request forgery (CSRF) attacks.

These features enhance the functionality, performance, and security of the Wikipedia Search Tool.

## Tech Stack

The Wikipedia Search Tool is built using the following technologies:

- React: A popular JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Node.js: A JavaScript runtime environment that allows running JavaScript on the server.
- Express: A fast, unopinionated web framework for Node.js.

These technologies work together to create a powerful and efficient search tool. React provides a robust UI framework, TypeScript adds static typing for enhanced code quality, Node.js enables server-side functionality, and Express simplifies the creation of the server.

By leveraging these technologies, the Wikipedia Search Tool delivers a seamless user experience with fast and accurate search results.

## Setup

To set up the project, follow these steps:

1. Clone this repository
2. Install dependencies: `npm install`

## Running the Server

To run the development server, you can use the following script:

### `npm run server`

This script runs the Node.js server using Express. It allows the React app to make API requests to the Wikipedia API. The server code can be found in the `server.js` file.

This server listens for GET requests to /api/search endpoint(5000 port) with a query parameter, fetches search results from the Wikipedia API, and returns them as JSON.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits, and you will see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode. Refer to the [running tests](https://facebook.github.io/create-react-app/docs/running-tests) section for more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project and copy all the configuration files and transitive dependencies (webpack, Babel, ESLint, etc) into your project so you have full control over them.

## Architecture

The Wikipedia search tool is built using React, a popular JavaScript library for building user interfaces. React allows for the creation of reusable UI components, making it easier to manage and maintain the application.

The tool follows a component-based architecture, where different parts of the application are broken down into smaller, reusable components. This promotes code reusability and maintainability.

The project uses Create React App, a pre-configured development environment for creating React applications. Create React App sets up a modern build pipeline with features like hot reloading, code splitting, and automatic transpilation and bundling.

For more information on Create React App and React, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and the [React documentation](https://reactjs.org/).

## Project Structure

The project follows a typical structure for a React application with TypeScript and a Node.js server. Here is an overview of the project structure:

- `src/`: Contains the source code for the React app.
    - `components/`: Contains reusable UI components.
    - `assets/`: Contains static assets such as images, icons, and fonts.
    - `pages/`: Contains the different pages of the application.
    - `services/`: Contains the services for making API requests.
    - `utils/`: Contains utility functions and helpers.
    - `server/`: Contains the code for the Node.js server.
- `public/`: Contains static assets and the HTML template for the app.
- `package.json`: The package configuration file that lists the project dependencies and scripts.


## Accessibility Measures

To ensure accessibility in the Wikipedia Search Tool, implemented the following measures:

1. Used the `aria-label` attribute to provide a descriptive label for elements that require additional context. For example,  `aria-label="Search"` to the search input field.

2. Labeled all form elements properly using the `<label>` element. Used  `for` attribute to associate the label with the corresponding form element using its `id` attribute. For example:

    ```html
    <label for="searchInput">Search:</label>
    <input type="text" id="searchInput" />
    ```

    Alternatively, used the `aria-label` or `aria-labelledby` attributes to provide labels for form elements.

3. Used semantic HTML elements like `<article>` to improve the semantics of your content. For example, wraped the main content of your search results in an `<article>` element.

4. Implemented proper focus management to ensure that users can navigate through the application using only the keyboard. This includes setting the appropriate `tabindex` values, handling focus styles, and managing focus traps.

5. Ensured keyboard accessibility by making sure all interactive elements can be accessed and used using only the keyboard. This includes providing keyboard shortcuts, handling keyboard events, and ensuring proper focus order.

By implementing these accessibility measures, made the Wikipedia Search Tool more inclusive and usable for all users.

## Security Measures

To ensure the security of the Wikipedia Search Tool, the following measures have been implemented:

1. Sanitizing API Responses: The application uses the `dompurify` library to sanitize API responses before rendering them in the UI. This helps prevent cross-site scripting (XSS) attacks by removing any potentially malicious code from the response.

2. CORS Middleware: Cross-Origin Resource Sharing (CORS) middleware is implemented on the server to restrict access to the API from unauthorized domains. This helps prevent cross-site request forgery (CSRF) attacks and ensures that only trusted domains can make requests to the server.

By implementing these security measures, the Wikipedia Search Tool ensures the integrity and safety of user data and protects against common web vulnerabilities.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code.

## About the Author

This project was created by Neeraj Swarnkar. You can find more of my work and connect with me on the following platforms:

- LinkedIn: [Neeraj Swarnkar](https://www.linkedin.com/in/neerajswarnkar/)
- GitHub: [neerajswarnkar](https://github.com/Neeraj-swarnkar)
- Stack Overflow: [neerajswarnkar](https://stackoverflow.com/users/1258518/frontend-expert)

I hope you find this project useful!