Mine:

UI Garden is a small React component library built using TypeScript and documented with Storybook.
Docker support is included for containerized execution.

This project was bootstrapped with Create React App.

Project Overview

This project includes:

Reusable UI components (Button, Card, Table, RadioButton, etc.)

TypeScript support

Storybook documentation for component visualization.

Docker configuration for containerized execution.

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

# UI Component Library (Assignment 13)

## Overview

This project is a React-based UI Component Library built with reusable components such as Button, Card, Table, Dropdown, etc.

It includes:

* React + TypeScript
* Storybook for component visualization
* ESLint + Prettier for code quality
* Husky for pre-commit checks
* GitHub Actions CI pipeline
* Docker for production deployment


# 1. Clone Repository

```bash
git clone https://github.com/harman1225/kaur_harman_ui_garden.git
cd kaur_harman_ui_garden

# 2. Install Dependencies

```bash
npm install --legacy-peer-deps

#  3. Run Application (Local)

```bash
npm start

Open in browser:

http://localhost:8018

#  4. Run Tests

```bash
npm test

# 5. Run ESLint

```bash
npm run lint

# 6. Run Prettier

```bash
npx prettier --check .

To fix formatting:

```bash
npm run format

# 📚 7. Run Storybook

```bash
npm run storybook

 Open:
http://localhost:6006

#8. Husky (Pre-commit Hooks)

Husky is configured to run:

* ESLint
* Prettier
* Tests

Automatically on every commit:

```bash
git add .
git commit -m "test commit"

#9. CI Pipeline (GitHub Actions)

CI runs automatically on every push and performs:

* Install dependencies
* Run ESLint
* Run Tests
* Check formatting

View in GitHub:
**Actions Tab → CI Pipeline**

# 10. Docker Setup

## Build Docker Image

```bash
docker build -t ui-garden .


## Run Docker Container

```bash
docker run -p 8081:8081 ui-garden


## Open Application

http://localhost:8081


## If Port is Busy

```bash
docker stop $(docker ps -q)
docker rm $(docker ps -aq)


# Project Structure


src/
 ├── components/
 │    ├── Button/
 │    ├── Card/
 │    ├── Table/
 │    └── ...
 ├── App.tsx
 └── index.tsx

#  Features Implemented

 Reusable UI Components
 TypeScript support
 Storybook integration
 ESLint + Prettier
 Husky pre-commit checks
 GitHub Actions CI pipeline
 Docker production build

 How to Run Everything

```bash
npm install --legacy-peer-deps
npm start
npm test
npm run lint
npm run storybook
docker build -t ui-garden .
docker run -p 8081:8081 ui-garden
```
