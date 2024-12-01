![Screenshot (ngrx)](https://github.com/user-attachments/assets/700f93ff-a987-46f3-9f05-81b9d74e0abd)


# Angular Project with NgRx, Material Table, and RxJS
This Angular project, built with Node.js 20.11.1 and Angular 17.2.0, demonstrates how to use NgRx for state management, Material Table for displaying data, MatSnackBar for feedback messages (failure, error), and RxJS for handling asynchronous operations like HTTP requests. The app fetches student data from an API, manages the state with Store, Actions, Reducers, Selectors, Effects, and uses Observables for managing the asynchronous flow.

# Features
NgRx Store for state management

NgRx Effects to handle side-effects like data fetching

NgRx Selectors for accessing state data

Material Table for displaying student data

MatSnackBar for displaying error and failure messages

RxJS for managing asynchronous data fetching with Observables

NgRx DevTools for state management debugging

# Requirements
Node.js 20.11.1

npm (comes with Node.js)

Angular 17.2.0


# Getting Started

# 1. Clone the Repository
bash
Copy code
git clone https://github.com/PanosKatsaras/angular-ngrx-app.git

cd angular-ngrx-app

# 2. Install Dependencies
Ensure Node.js 20.11.1 is installed using nvm (Node Version Manager), then install project dependencies:

bash
Copy code
nvm install 20.11.1
nvm use 20.11.1
npm install

# 3. Run the Application
Start the application locally:

bash
Copy code
ng serve
Visit http://localhost:4200 in your browser to view the app.

# 4. Set Up API Endpoint
In the src/environments/environment.ts file, set the correct API URL for fetching student data.

# 5. Enable Developer Tools (Optional)
For debugging state changes, use the NgRx DevTools extension in your browser. It allows tracking of actions and state changes.

# Project Structure
src/app/store: Contains NgRx-related files (actions, reducers, selectors, effects).
src/app/components: Contains components that interact with the UI, including the Material Table for displaying students.
src/app/services: Responsible for making HTTP requests to fetch student data.
src/environments: Holds environment-specific configurations like API URL.
# NgRx Flow
Actions: Triggered by components or system events (e.g., loading students).
Effects: Handle side-effects like API calls based on actions.
Reducers: Update the store’s state in response to dispatched actions.
Selectors: Retrieve specific pieces of state, such as student data.
Material Table
The Material Table is used to display the list of students from the store. It’s bound to the state using selectors to dynamically display the data.

## MatSnackBar for Feedback Messages
MatSnackBar is used for notifying users of success, error, or failure events, providing feedback for actions such as loading data from the API.

## HTTP Service with RxJS
The StudentService handles HTTP requests using Angular’s HttpClient and manages asynchronous data flow with RxJS Observables.

## Observables are used for asynchronous data operations like fetching students.
RxJS operators (e.g., catchError, map, mergeMap) manage the data flow and error handling.
NgRx Effects for Data Fetching
NgRx Effects handle side-effects, such as making HTTP requests. This ensures the store's state is updated based on the API response, managing loading, success, and error states.

## Development Tips
Use NgRx DevTools to monitor actions and state updates.
Show status feedback via MatSnackBar on API request success or failure.
Organize NgRx files (actions, reducers, effects) in a modular structure to keep the codebase maintainable.
Leverage RxJS for handling asynchronous operations and side-effects effectively.

# Technologies Used
Node.js 20.11.1: JavaScript runtime

Angular 17.2.0: Framework for building the application

NgRx: State management (Store, Actions, Reducers, Effects, Selectors)

Angular Material: UI components (Material Table, MatSnackBar, etc.)

RxJS: Library for reactive programming and handling async operations

HttpClient: Service for making HTTP requests
