# Attendance System

## Overview

This project is an attendance system that includes a client-server architecture. It consists of a server that handles authentication and a client that interacts with this server.

## Project Structure

The project is structured as follows:

- **attendance-system/**
  - **server/**: Contains server code and REST API implementation.
  - **client/**: Contains client code and user interface pages.
  - **docs/**: Documentation related to the project.

## Setup and Running the Project

### Server Setup

1. Navigate to the `server` folder:
    ```bash
    cd attendance-system/server
    ```
2. Install dependencies. (The method may vary based on the chosen language/framework. For example, if using Node.js with Express, you might use `npm`):
    ```bash
    npm install
    ```
3. Start the server:
    ```bash
    npm start
    ```

### Client Setup

1. Navigate to the `client` folder:
    ```bash
    cd attendance-system/client
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the client application:
    ```bash
    npm start
    ```

## Usage

### Login

1. Open the client application in your browser.
2. Navigate to the login page.
3. Enter the username and password.
4. Click the login button to authenticate.

### Home Page

1. After a successful login, you will be redirected to the home page.
2. You can view a welcome message and have the option to log out.

### Logout

1. Click the logout button on the home page to end the session.
2. You will be redirected to the login page.

## Test Credentials

Use the following credentials for testing:

- **Username:** dinistan
- **Password:** dinistan123