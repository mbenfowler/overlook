// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { loginUser, toggleView, bookNow, goToPreviousPanel, exitPanel, confirmDate, confirmRoomType, getRoomDetails, confirmBooking, returnToDash } from './domUpdates';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/user.png';
import './images/delete.png';
import './images/back.png';
import './images/overlook-background.png';


// query selectors
const userInput = document.querySelector('#username');
const passInput = document.querySelector('#pass');
const submitLogin = document.querySelector('#submit');
const userActions = document.querySelector('#userActions');
const main = document.querySelector('main');
const bookings = document.querySelector('#bookings');
const root = document.querySelector(':root');
const leadingZero = document.querySelector('#leadingZero');
const bookingsToggle = document.querySelector('#bookingsToggle');
const upcomingBookings = document.querySelector("#upcoming");
const previousBookings = document.querySelector("#previous");
const bookNowBtn = document.querySelector("#bookNowBtn");
const newBooking = document.querySelector("#newBooking");
const backBtn = document.querySelector("#backBtn");
const exitBtn = document.querySelector("#exitBtn");
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
const returnToDashBtn = document.querySelector('#returnToDash');

// event listeners

submitLogin.addEventListener('click', loginUser);

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

backBtn.addEventListener('click', goToPreviousPanel);

backBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        goToPreviousPanel();
    }
});

exitBtn.addEventListener('click', exitPanel);

exitBtn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        exitPanel();
    }
});

confirmDateBtn.addEventListener('click', () => {
    confirmDate(date);
});

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

export { userInput, passInput, main, userActions, bookings, root, leadingZero, upcomingBookings, previousBookings, newBooking, selectRoomTypePanel, roomSelect, roomsAvailablePanel, roomsAvailable, date, confirmBookingPanel, roomDetails };
