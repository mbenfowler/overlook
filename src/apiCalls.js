import { getRandomUser } from './user';
import { renderDashboard } from './domUpdates';

let currentUser;
let pageData = {
  currentUserBookings: [],
  allRooms: []
};

const getAllUsers = () => fetch('http://localhost:3001/api/v1/customers');
const getAllBookings = () => fetch('http://localhost:3001/api/v1/bookings');
const getAllRooms = () => fetch('http://localhost:3001/api/v1/rooms');

const handleUserData = users => currentUser = getRandomUser(users);

const handleBookingsData = bookings => {
  setTimeout(() => {
    pageData.currentUserBookings = bookings.filter(booking => booking.userID === currentUser.id);
    renderDashboard(pageData);
  }, 10);
}

const loadData = () => {
    Promise.all([getAllUsers(), getAllBookings(), getAllRooms()])
    .then (responses => {
      responses.forEach(response => {
        if(response.ok) {
          response.json()
          .then (data => {
            const functions = {
              rooms: (rooms) => pageData.allRooms = rooms,
              customers: (users) => handleUserData(users), 
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

export { loadData, pageData };
