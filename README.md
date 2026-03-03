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



Getting Started with UI Garden

This project was bootstrapped with Create React App
. It is a small React component library built using TypeScript and documented with Storybook. Docker support has also been added for containerized execution.

Available Scripts

In the project directory, you can run:

npm start

Runs the React application in development mode.
Open http://localhost:3000
 to view it in your browser.

The page will reload if you make edits.
You may also see lint errors in the console.

npm run storybook

Runs Storybook in development mode.
Open http://localhost:6006
 to view the component documentation.

Storybook allows you to interact with the reusable UI components and test different variations.

npm test

Launches the test runner in interactive watch mode.

npm run build

Builds the React app for production to the build folder.
It bundles React in production mode and optimizes the build for best performance.

npm run eject

Note: this is a one-way operation. Once you eject, you can’t go back.

If you are not satisfied with the build configuration, you may eject at any time. This will copy all configuration files and dependencies into your project so you have full control over them.

Docker Usage

This project can also be run using Docker.

Build the Docker image
docker build -t ui-garden .
Run the Docker container
docker run -p 6006:6006 ui-garden

Then open:

http://localhost:6006

Storybook will run inside the Docker container.

Project Overview

This project includes:

A reusable Button component
TypeScript support
Storybook documentation
Docker configuration

Learn More:

You can learn more about Create React App here:
https://facebook.github.io/create-react-app/docs/getting-started

To learn more about React, visit:
https://reactjs.org/

This project was created for educational purposes as part of a UI component library assignment.
