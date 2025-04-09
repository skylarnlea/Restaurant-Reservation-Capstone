# Final Capstone: Restaurant Reservation System - Periodic Tables
"Periodic Tables" is the final capstone project for my online Software Enigneering program through [Chegg Skills](https://www.chegg.com/skills/our-programs/web-development/). This full-stack web application creates a reservation system for restaurant personnel to utilize when a customer calls to request a reservation. This includes creating new reservations, editing existing reservations, searching for reservations, booking and seating reservations, cancelling reservations, and "finishing" reservations once those guests have completed their dining experience. I was able to apply all the skills and knowledge I have obtained throughout this course to create this user-friendly program.

The following [user-stories](https://github.com/Thinkful-Ed/starter-restaurant-reservation.git) consist of both frontend and backend instructions including testing, error-handling, routes, and validation middleware. Migrations and seeds were created using Knex, alongside controllers and services to connect to and query the PostgreSQL database. Both the server and client sides were deployed through Render - take a look at my [final project](https://restaurant-reservation-app-project.onrender.com).

## Languages and Frameworks used:
- React and React Router
- JavaScript
- CSS
- Bootstrap CSS
- Node.js
- Express.js
- Knex.js
- PostgreSQL with Render
- RESTful API

## Features:
### Dashboard
This is the home page for the application where all reservations are listed for a given day, the tables that will show either "free" or "occupied", and a button toolbar where you can select to search for a reservation, create a reservation, or create a table. 
#### Reservations
The reservations list consists of reservation cards that display the customer's reservation info: first and last name, mobile number, date and time of reservation, the number of people for th reservation, and buttons to either edit, cancel or seat the reservation. The status of the reservation is also displayed as either "booked", "seated", or "cancelled". If a reservation is "finished" it will not show on the dashboard. 
#### Tables
Each table card displays the name of the table, the capacity, and the status. When the table is "free" it is defaulted to green and when it is "occupied" it is changed to yellow with a "finish" button within the table card. 

[Dashboard](screenshots/Dashboard.png "Dashboard")

### Create Reservation
The "New Reservation" page (```/reservations/new```) allows the user to create a new reservation. Input fields include first and last name, mobile number, date, time, and number of guests. Each field has validations in the form component as well as in the back-end, and will display an error message in red at the top of the page for any violations. Clicking "Cancel" returns to the previous page, while clicking "Submit" sends a POST request to the server, creates the reservation, and displays it on the dashboard on it's given reservation day.

[Create New Reservation](screenshots/Create_Reservation.png "Create a new reservation")

### Create New Table
The "New Table" page (```/tables/new```) allows the user to create a new table for the restaurant. Input fields include the table name (such as #1 - #4, Bar#1 - Bar#3, Patio#1 - Patio#5) and the table capacity, which must be a number between 1 and 8. Appropriate validation is included in the front and back-end as well as error messages.
Clicking "Cancel" returns to the previous page, while "Submit" sends a POST request to the server, creates the table, and adds it to the tables list on the Dashboard.

[New Table](screenshots/New_Table.png "New Table")

### Edit Reservation
The "Edit Reservation" page (```/reservations/:reservation_id/edit```) allows the user to edit an existing reservation and change any of the components they need to including name, number, party size, date and time. Clicking the "Edit" button on a reservation card redirects to this page and displays the same form component used for "Create a New Reservation," prefilled with the given reservation's existing information. The same validations are used here as well. Clicking "Submit" sends a PUT request to the server, updates the reservation information, and displays the Dashboard.

[Edit Reservation](screenshots/Edit_Reservation.png "Edit Reservation")

### Cancel Reservation
On each reservation card, a "Cancel" button is displayed only when the reservation status is "booked." Clicking "Cancel" presents a message asking the user to confirm whether or not they wish to cancel the reservation. Clicking "Ok" sends a PUT request to the server, changes the reservation status to "Cancelled," and removes the "Edit" and "Seat" buttons from the reservation card.

[Cancel Reservation](screenshots/Cancel_Reservation.png "Cancel Reservation")

### Seat Reservation
Each reservation card contains a "Seat" button that leads to the "Seating" page (```/reservations/reservation_id/seat```). The user can choose a table from the dropdown menu, which contains all table names as well as their capacity. Clicking "Cancel" returns to the previous page, while clicking "Submit" sends a PUT request to the server to add the given reservation_id to the chosen table, and then displays the dashboard. The reservation card then displays a status of "Seated" and the assigned table displays a status of "Occupied" with a "Finish" button.

[Seat Reservation](screenshots/Seat_Reservation.png "Seat Reservation")

### Finish Table
An occupied table displays a "Finish" button. Clicking "Finish" displays a message to the user to confirm whether or not the reservation is finished and the table can become unoccupied. Clicking "Ok" sends a DELETE request to the server, removing the current reservation_id from the table to change the table's status to "free." The given reservation's status is changed to "finished." A reservation with a status of "finished" is not displayed on the dashboard.

[Finish Table](screenshots/Finish_Table.png "Finish Table")


## Installation
- Fork and clone [this repository](https://github.com/Thinkful-Ed/starter-restaurant-reservation.git).
- Run cp ./back-end/.env.sample ./back-end/.env.
- Update the ./back-end/.env file with the connection URL's to your PostgreSQL database instance.
- Run cp ./front-end/.env.sample ./front-end/.env.
- You should not need to make changes to the ./front-end/.env file unless you want to connect to a backend at a location other than http://localhost:5001.
- Run npm install to install project dependencies. Note: If you are having problems installing this project with Node 18 try using Node 16 instead (nvm use 16).
- Run npm run start:dev to start your server in development mode.

### Database Setup
- Set up a new PostgreSQL database instance and be sure to append ?ssl=true to the end of the URL to ensure a secure connection.
- After setting up your database instance, connect DBeaver to your new database instances.

### Knex
- Run npx knex commands from within the back-end folder, which is where the knexfile.js file is located.

