// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { loadData } from './apiCalls';
import { toggleView, bookNow } from './domUpdates';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/user.png';


// query selectors
const bookings = document.querySelector('#bookings');
const root = document.querySelector(':root');
const leadingZero = document.querySelector('#leadingZero');
const bookingsToggle = document.querySelector('#bookingsToggle');
const upcomingBookings = document.querySelector("#upcoming");
const previousBookings = document.querySelector("#previous");
const bookNowBtn = document.querySelector("#bookNowBtn");
const newBooking = document.querySelector("#newBooking");

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


export { bookings, root, leadingZero, upcomingBookings, previousBookings, newBooking };
