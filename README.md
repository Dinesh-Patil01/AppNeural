*****Todo List Application*****

A full-stack Todo List application built with React for the frontend and Node.js (Express) for the backend. 
This application allows users to create, edit, delete, and view tasks, with a clean and user-friendly interface enhanced by Tailwind CSS.


# Features:--
  -Create new tasks
  -Edit existing tasks
  -Delete tasks
  -View task list
  -Task status management (Active/Inactive)


# Technologies Used:--
  -Frontend:- React, Tailwind CSS
  -Backend:- Node.js, Express
  -Database:- MongoDB
  -HTTP Client:- Axios


# Prerequisites:--
  -Ensure you have the following installed:
      -Node.js (version 14 or higher)
      -npm (comes with Node.js)


# Project Setup:--

* Backend (Server Setup):-
    -Navigate to the backend directory =  cd backend
    -Install the dependencies = npm install
    -Start the server = npm run dev
    -The server will start at http://localhost:5000.

* Frontend (Client Setup):-
    -Navigate to the frontend directory = cd frontend
    -Install the dependencies = npm install
    -Start the frontend development server = npm start
    -The frontend will start at http://localhost:3000.

* Environment Variables Setup:-
    - Create a .env file in the backend directory and add the following variables:
        PORT=5000
        DATABASE_URL=mongodb://localhost:27017/todo

*Running the Full Application :-------->>
  -Start the backend server: 
      - Open a terminal and run ==> cd backend  ==> npm run dev

  -Start the frontend:
      - Open another terminal and run ==> cd frontend ==> npm start


** Access the Application: --->>>
    -Open your browser and go to http://localhost:3000 to use the frontend.


# How to Test the Application :------->>>>>>>>>>>>>>>>>>
  - Add a Task:=  Use the task form to add a new task to the list. Provide an ID, title, description, and status (Active/Inactive).
  - Edit a Task:=  Click the "Edit" button next to a task to modify its details.
  - Delete a Task:=  Click the "Delete" button to remove a task from the list.
  - Task Status:=  Task status is displayed with color codes (green for Active, red for Inactive).


### Approach ==>
  - This project follows a simple full-stack architecture:-
        - Frontend: The frontend is built using React, with Tailwind CSS for styling. The component structure is kept minimal and clean for better understanding and performance.
        - Backend: The backend is a RESTful API built using Express.js. It handles basic CRUD operations for managing tasks.
        - Communication: Axios is used to handle HTTP requests between the frontend and the backend.

This structure ensures that the application is modular, easy to understand, and scalable for future enhancements.

## Folder Structure :--

├── backend
│   ├── routes       
│   ├── controllers   
│   ├── app.js         
│   └── package.json   
└── frontend
    ├── src
    │   ├── components -----> (TaskTable, TaskForm, TaskList)
    │   └── App.js    
    └── package.json  

![ToDo App UI](https://i.ibb.co/ccVv4Jj/ui.png)






    
