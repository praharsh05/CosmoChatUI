# CosmoChat UI

Learning Project for React and OpenAI API integration.

## Project Overview

CosmoChat UI was developed for Radical AI as the second learing project. The main purpose of this project was to create a frontend for an OpenAI enabled chat bot in this case `ScottishGPT` using React, and to create a Material UI styled activity chat of our iteraction with the ScottishGPT.

## Techical Architecture

CosmoChat UI uses the following framework and technologies:

1. React
2. OpenAI GPT 3.5 Turbo API
3. React Router
4. Material UI
5. ChatScope UI Library
6. Node.js

## Installation

Follow the steps to install and run this project

1. Install node from (https://nodejs.org/en).
2. Install and initialize the react app in your working directory by running the command `npx create-react-app .`.
3. Install React Router DOM using the command `npm install react-router-dom`.
4. Install Axios using the command `npm install axios`
5. Install Redux using `npm install redux react-redum`
4. Install Material UI bar chart

## Code Structure and Organisation

The code is organised into multiple folders in order to segregate the different aspects of development from one another.

All the APIs are present in the `api` folder, all the static images and logos are in `assests`, any HTML components that can be used multiple times in the UI is placed under `component`, the different pages that are rendered to make up the functionalities of the application are under `pages`, all the CSS files are in the `styles` folder. Apart from these folders, `App.jsx` is the root element of the application and `index.js` is the entry point for application.

## Implementation