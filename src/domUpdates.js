import { bookings, root, leadingZero, upcomingBookings, previousBookings } from "./scripts";
import { toggleBtns } from "./helperFunctions";
import { getTotalSpent } from "./user";
import { getBookingsByView } from "./bookings";
import { pageData } from "./apiCalls";

let currentView = 'upcoming';

const renderDashboard = (pageData) => {
    const bookingsByView = getBookingsByView(pageData.currentUserBookings, currentView);
    const totalDollarsSpent = getTotalSpent(bookingsByView, pageData.allRooms);

    const cents = Math.trunc((totalDollarsSpent % 1).toFixed(2) * 100);
    if (cents.toString().length > 1) {
        leadingZero.classList.add('hidden');
    }

    root.style.setProperty('--costInDollars', totalDollarsSpent.toFixed(0));
    root.style.setProperty('--cents', cents);

    let rowColor;
    bookings.innerHTML = `
        <div style="background-color:gray">
            <span>Date</span>
            <span>Room No.</span>
            <span>Room Type</span>
            <span>Bed Size</span>
            <span>No. Beds</span>
            <span>$</span>
        </div>
    `;
    bookingsByView.forEach((booking, i) => {
        const thisRoom = pageData.allRooms.find(room => room.number === booking.roomNumber);
        i % 2 === 0 ? rowColor = '#bbf3c5' : rowColor = 'white';
        bookings.innerHTML += `
        <div style=background-color:${rowColor};">
            <span>${booking.date}</span>
            <span>${booking.roomNumber}</span>
            <span>${thisRoom.roomType}</span>
            <span>${thisRoom.bedSize}</span>
            <span>${thisRoom.numBeds}</span>
            <span>${thisRoom.costPerNight}</span>
        </div>`
    });
}

const toggleView = (clickedViewID) => {
    if (clickedViewID !== currentView) {
        toggleBtns([upcomingBookings, previousBookings]);
        currentView = clickedViewID;
        renderDashboard(pageData);
    }
}

export { renderDashboard, toggleView };
