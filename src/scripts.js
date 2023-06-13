// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { loadData } from './apiCalls';
import { toggleView, bookNow, confirmDate, confirmRoomType, getRoomDetails, confirmBooking, returnToDash } from './domUpdates';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/user.png';
import './images/delete.png';
import './images/back.png';


// query selectors
const bookings = document.querySelector('#bookings');
const root = document.querySelector(':root');
const leadingZero = document.querySelector('#leadingZero');
const bookingsToggle = document.querySelector('#bookingsToggle');
const upcomingBookings = document.querySelector("#upcoming");
const previousBookings = document.querySelector("#previous");
const bookNowBtn = document.querySelector("#bookNowBtn");
const newBooking = document.querySelector("#newBooking");
const date = document.querySelector("#bookingDate");
const confirmDateBtn = document.querySelector("#confirmDate");
const selectRoomTypePanel = document.querySelector("#selectRoomTypePanel");
const roomSelect = document.querySelector("#roomSelect");
const confirmRoomTypeBtn = document.querySelector("#confirmRoomType");
const roomsAvailablePanel = document.querySelector("#roomsAvailablePanel");
const roomsAvailable = document.querySelector("#roomsAvailable");
const roomDetails = document.querySelector("#roomDetails");
const confirmBookingPanel = document.querySelector('#confirmBookingPanel');
const confirmBookingBtn = document.querySelector('#confirmBookingBtn');
const returnToDashBtn = document.querySelector('#returnToDash')

// event listeners
window.addEventListener('load', loadData);

bookingsToggle.addEventListener('click', (e) => {
    if (e.target.classList.contains("unselected-view")) {
        toggleView(e.target.id);
    }
});

bookingsToggle.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains("unselected-view")) {
        toggleView(e.target.id);
    }
});

bookNowBtn.addEventListener('click', bookNow);

bookNowBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        bookNow();
    }
});

confirmDateBtn.addEventListener('click', confirmDate);

confirmDateBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        confirmDate();
    }
});

confirmRoomTypeBtn.addEventListener('click', confirmRoomType);

confirmRoomTypeBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        confirmRoomType();
    }
});

roomsAvailable.addEventListener('click', (e) => {
    if (e.target.classList && e.target.closest('.room-card')) {
        getRoomDetails(e.target.closest('.room-card').id);
    }
});

roomsAvailable.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        getRoomDetails(e.target.closest('.room-card').id);
    }
});

confirmBookingBtn.addEventListener('click', confirmBooking);

confirmBookingBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        confirmBooking();
    }
});

returnToDashBtn.addEventListener('click', returnToDash);

returnToDashBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        returnToDash();
    }
});

export { bookings, root, leadingZero, upcomingBookings, previousBookings, newBooking, selectRoomTypePanel, roomSelect, roomsAvailablePanel, roomsAvailable, date, confirmBookingPanel, roomDetails };
