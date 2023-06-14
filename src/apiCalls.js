import { getRandomUser } from './user';
import { renderDashboard } from './domUpdates';

let pageData = {
  currentUser: {},
  currentUserBookings: [],
  allRooms: [],
  allBookings: []
};

const getUser = (userID) => {
  fetch(`http://localhost:3001/api/v1/customers/${userID}`)
    .then(response => response.json())
    .then(user => pageData.currentUser = user)
    .catch(err => console.error(err));
}
const getAllBookings = () => fetch('http://localhost:3001/api/v1/bookings');
const getAllRooms = () => fetch('http://localhost:3001/api/v1/rooms');

// const handleUserData = (users, userID) => pageData.currentUser = users.find(user => user.id === userID);

const handleBookingsData = bookings => {
  pageData.allBookings = bookings;
  setTimeout(() => {
    pageData.currentUserBookings = bookings.filter(booking => booking.userID === pageData.currentUser.id);
    renderDashboard(pageData);
  }, 500);
}

const loadData = () => {
    Promise.all([getAllBookings(), getAllRooms()])
    .then (responses => {
      responses.forEach(response => {
        if(response.ok) {
          response.json()
          .then (data => {
            const functions = {
              rooms: (rooms) => pageData.allRooms = rooms,
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

export { getUser, loadData, pageData, addBooking };
