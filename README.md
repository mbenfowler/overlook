# Overlook? 
<div align="center">
<b>Built With:</b>
<br>
Javascript | HTML | CSS | REST API
<br>
<em>Testing Technologies:</em>
<br>
 Mocha & Chai 
</div>

## Abstract: 
Jobs that demand a large amount of travel demand a streamlined solution for those workers and their admin support teams to view booking data book their nightly lodgings. Enter: Overlook! - the no-frills booking web application for those with no extra time to nit-pick the details.

### User Stories: 
-  I should see a dashboard page that shows me:
  - Any room bookings I have made (past or upcoming)
  - The total amount I have spent on rooms
- I should be able to select a date for which I’d like to book a room for myself
  - Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date
- I should be able to filter the list of available rooms by their roomType property
- I should be able to select a room for booking
  - In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search
- I can login to access my personal booking data
- Website is set up for accessibility

## Installation Instructions 
- In order for this application to function, it will require accessing both our backend server repository as well as our front-end repository. 

### Server Setup
- Clone [this](https://github.com/turingschool-examples/overlook-api) repository. 
- Run: `cd overlook-cookin-api`
- Run: `npm install`
- Run: `npm start`

<br>

### Client App Setup
- Clone [this](https://github.com/mbenfowler/overlook) repository. 
- Run: `cd overlook`
- Run: `npm install`
- Run: `npm start`
- Once the modules have finished compiling, enter `http://localhost:8080/` into your browser to see the live web page. 

## Preview of App:
### Desktop Display:

![overlook gif](./src/images/overlook-demo.gif)

## Context: 
- Turing School of Software & Design - Mod 2 final solo project
- A total of approximately 80 hours was spent on this project

## Contributors: 
- [Matt Fowler](https://github.com/mbenfowler)

## Learning Goals:
- Use object and array prototype methods to perform data manipulation
- Create a clear and accessible user interface
- Make network requests to retrieve data
- Implement a robust testing suite using TDD
- Write DRY, reusable code that follows SRP (Single Responsibility Principle)