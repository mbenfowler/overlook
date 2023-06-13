import { bookings, root, leadingZero, upcomingBookings, previousBookings, newBooking, selectRoomTypePanel, roomSelect, roomsAvailablePanel, roomsAvailable, date } from "./scripts";
import { toggleBtns } from "./helperFunctions";
import { getTotalSpent } from "./user";
import { getBookingsByView } from "./bookings";
import { pageData } from "./apiCalls";

let currentView = 'upcoming';
let today;
let selectedDate;
let selectedRoomType;

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
    
    if(!bookingsByView.length) {
        bookings.innerHTML += `<p id=noBookings>No ${currentView} bookings!<p>`;
    } else {
        bookingsByView.forEach((booking, i) => {
            const thisRoom = pageData.allRooms.find(room => room.number === booking.roomNumber);
            i % 2 === 0 ? rowColor = '#bbf3c5' : rowColor = 'white';
            bookings.innerHTML += `
            <div class=row style=background-color:${rowColor};>
                <span>${booking.date}</span>
                <span>${booking.roomNumber}</span>
                <span>${thisRoom.roomType}</span>
                <span>${thisRoom.bedSize}</span>
                <span>${thisRoom.numBeds}</span>
                <span>${thisRoom.costPerNight}</span>
            </div>`
        });
    }
}

const toggleView = (clickedViewID) => {
    if (clickedViewID !== currentView) {
        toggleBtns([upcomingBookings, previousBookings]);
        currentView = clickedViewID;
        renderDashboard(pageData);
    }
}

const bookNow = () => {
    nav.classList.add('blur', 'no-click');
    costAndToggle.classList.add('blur', 'no-click');
    bookings.classList.add('blur', 'no-click');
    newBooking.classList.remove('hidden');
    newBooking.classList.add('fade-in');
    selectDatePanel.classList.remove('hidden');
    date.value = new Date().toISOString().split('T')[0];
}

const confirmDate = () => {
    selectedDate = date.value;
    // filter room availability by date
    selectDatePanel.classList.add('slide-out');
    setTimeout(() => {
        selectDatePanel.classList.add('hidden');
        selectRoomTypePanel.classList.remove('hidden');
        selectRoomTypePanel.classList.add('slide-in');
    }, 500);
}

const confirmRoomType = () => {
    selectedRoomType = roomSelect.value;
    // filter room availability by room Type
    selectRoomTypePanel.classList.remove('slide-in');
    selectRoomTypePanel.classList.add('slide-out');
    setTimeout(() => {
        selectRoomTypePanel.classList.add('hidden');
        roomsAvailablePanel.classList.remove('hidden');
        roomsAvailablePanel.classList.add('slide-in');
        getRoomsAvailable();
    }, 500);
}

const getRoomsAvailable = () => {
    // make single column of room cards
    roomsAvailable.innerHTML = `weeeeeee`;
}

export { renderDashboard, toggleView, bookNow, confirmDate, confirmRoomType };
