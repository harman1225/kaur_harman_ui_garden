# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Mine:

UI Garden is a small React component library built using TypeScript and documented with Storybook.
Docker support is included for containerized execution.

This project was bootstrapped with Create React App.

Project Overview

This project includes:

Reusable UI components (Button, Card, Table, RadioButton, etc.)

TypeScript support

Storybook documentation for component visualization

Docker configuration for containerized execution

This project was created for educational purposes as part of a UI Component Library assignment.

Available Scripts

In the project directory, you can run:

npm start

Runs the React application in development mode.

Open:
http://localhost:3000

The page reloads automatically when you make changes.

npm run storybook

Runs Storybook in development mode.

Open:
http://localhost:6006

(or custom port if configured)

Storybook allows you to:

View components independently

Test different props

Interact with component variations

npm test

Launches the test runner in interactive watch mode.

npm run build

Builds the React app for production inside the build folder.

The build is optimized for best performance.

npm run eject

Note: This is a one-way operation.

Ejecting copies all configuration files into your project so you have full control over them.

Docker Usage

This project can also run using Docker.

1 Build Docker Image
docker build -t ui-garden .
2️Run Docker Container

If using default Storybook port (6006):

docker run -p 6006:6006 ui-garden

If using custom port (8083 as in your Dockerfile):

docker run -p 8083:8083 ui-garden
Open in Browser

If using port 8083:

http://localhost:8083

Storybook will run inside the Docker container.

Technologies Used

React

TypeScript

Storybook

Docker

Create React App

Learn More

Create React App Documentation:
https://facebook.github.io/create-react-app/docs/getting-started

React Documentation:
https://reactjs.org/

# Steps to run project

npm install
npm run storybook

# Docker

docker build -t kaur_harman_coding_assignment13 .
docker run -p 8018:80 kaur_harman_coding_assignment13

Open: http://localhost:8018
