import { getRandomUser } from './user';
import { renderDashboard } from './domUpdates';

let pageData = {
  currentUser: {},
  currentUserBookings: [],
  allRooms: [],
  allBookings: []
};

const getAllUsers = () => fetch('http://localhost:3001/api/v1/customers');
const getAllBookings = () => fetch('http://localhost:3001/api/v1/bookings');
const getAllRooms = () => fetch('http://localhost:3001/api/v1/rooms');

const handleUserData = (users , userID) => pageData.currentUser = users.find(user => user.id === userID);

const handleBookingsData = bookings => {
  pageData.allBookings = bookings;
  setTimeout(() => {
    pageData.currentUserBookings = bookings.filter(booking => booking.userID === pageData.currentUser.id);
    renderDashboard(pageData);
  }, 10);
}

const loadData = (userID) => {
    Promise.all([getAllUsers(), getAllBookings(), getAllRooms()])
    .then (responses => {
      responses.forEach(response => {
        if(response.ok) {
          response.json()
          .then (data => {
            const functions = {
              rooms: (rooms) => pageData.allRooms = rooms,
              customers: (users) => handleUserData(users, userID), 
              bookings: (bookings) => handleBookingsData(bookings)
            };
            const property = response.url.split('/').reverse()[0];
            functions[property](data[property]);
          })
          .catch(err => console.error(err));
        } else {
          console.error(response.status);
        }
    })
  })   
}

const addBooking = (date, roomNumber) => {
  const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
  };

  requestOptions.body = JSON.stringify({ 
    "userID": pageData.currentUser.id, 
    "date": date, 
    "roomNumber": roomNumber
  });
  
  fetch('http://localhost:3001/api/v1/bookings', requestOptions)
    .then(response => response.json())
    .then(data => {
      pageData.latestBookingID = data.newBooking.id;
    })
    .catch(error => console.error(error));
}

export { loadData, pageData, addBooking };
