import { userInput, passInput, main, userActions, bookings, root, leadingZero, upcomingBookings, previousBookings, newBooking, selectRoomTypePanel, roomSelect, roomsAvailablePanel, roomsAvailable, date, roomDetails, confirmBookingPanel } from "./scripts";
import { toggleBtns } from "./helperFunctions";
import { userLookup, getTotalSpent } from "./user";
import { getBookingsByView } from "./bookings";
import { pageData, getUser, loadData, addBooking } from "./apiCalls";

let currentView = 'upcoming';
let currentPanel;
let selectedDate;
let roomsFilteredByDate;
let selectedRoomType;
let selectedRoom;
let hasBidet;

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

const loginUser = () => {
    const userID = userLookup(userInput.value);
    if (userID && passInput.value === 'overlook2021') {
        login.classList.add('hidden');
        getUser(userID);
        loadData();
        main.classList.remove('hidden');
        userActions.classList.remove('hidden');
    } else {
        console.log("Incorrect username or password, try again")
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
    currentPanel = 'selectDatePanel';
    nav.classList.add('blur', 'no-click');
    costAndToggle.classList.add('blur', 'no-click');
    bookings.classList.add('blur', 'no-click');
    newBooking.classList.remove('hidden');
    newBooking.classList.add('fade-in');
    selectDatePanel.classList.remove('hidden');
}

const goToPreviousPanel = () => {
    if (currentPanel === 'selectDatePanel') {
        exitPanel();
    } else {
        
    }
}

const exitPanel = () => {
    if (currentPanel !== 'selectDatePanel') {
        const thisPanel = document.querySelector(`#${currentPanel}`);
        thisPanel.classList.add('hidden');
        thisPanel.classList.remove('slide-in');
    }
    
    returnToDash();
}

const confirmDate = (date) => {
    if (date.valueAsDate < new Date().setDate(new Date().getDate() - 1)) {
        alert("What are you Marty McFly? Please pick a future date.")
    } else {
        currentPanel = 'selectRoomTypePanel';
        selectedDate = date.value.replaceAll('-', '/');
        roomsFilteredByDate = pageData.allRooms.filter(room => {
            const foundBooking = pageData.allBookings.find(booking => {
                return booking.date === selectedDate && booking.roomNumber === room.number;
            });
            
            if(!foundBooking) return room;
        });

        selectDatePanel.classList.add('slide-out');
        setTimeout(() => {
            selectDatePanel.classList.add('hidden')
            selectDatePanel.classList.remove('slide-out');
            selectRoomTypePanel.classList.remove('hidden');
            selectRoomTypePanel.classList.add('slide-in');
        }, 500);
    }
}

const confirmRoomType = () => {
    selectedRoomType = roomSelect.value;
    currentPanel = 'roomsAvailablePanel';
    const roomsFilteredByDateAndType = roomsFilteredByDate.filter(room => room.roomType === selectedRoomType);

    selectRoomTypePanel.classList.remove('slide-in');
    selectRoomTypePanel.classList.add('slide-out');
    setTimeout(() => {
        selectRoomTypePanel.classList.add('hidden');
        selectRoomTypePanel.classList.remove('slide-out');
        roomsAvailablePanel.classList.remove('hidden');
        roomsAvailablePanel.classList.add('slide-in');
        getRoomsAvailable(roomsFilteredByDateAndType);
    }, 500);
}

const getRoomsAvailable = (rooms) => {
    roomsAvailable.innerHTML = '';
    if (!rooms.length) {
        roomsAvailable.innerHTML = `
            <p>We're supremely sorry, but no rooms of this type are available on the day you requested. Please try again for an alternate day and/or room type.</p>
        `
    } else {
        rooms.forEach(room => {
            roomsAvailable.innerHTML += `
                <div tabindex=1 class=room-card id=${room.number}>
                    <span>${room.numBeds} ${room.bedSize} bed(s)</span> <span>$${room.costPerNight}</span>
                </div>
            `;
        });
    }
}

const getRoomDetails = (roomNumber) => {
    currentPanel = 'confirmBookingPanel';
    roomsAvailablePanel.classList.remove('slide-in');
    roomsAvailablePanel.classList.add('slide-out');
    setTimeout(() => {
        roomsAvailablePanel.classList.add('hidden');
        roomsAvailablePanel.classList.remove('slide-out');
        confirmBookingPanel.classList.remove('hidden');
        confirmBookingPanel.classList.add('slide-in');
    }, 500);

    selectedRoom = pageData.allRooms.find(room => room.number === Number(roomNumber));
    hasBidet = selectedRoom.bidet ? 'Yes' : 'No';
    roomDetails.innerHTML = `
        <p>${selectedRoom.roomType}</p>
        <p>${selectedRoom.numBeds} ${selectedRoom.bedSize} bed(s)</p>
        <p>Bidet? <span id="hasBidet">${hasBidet}</span></p>
        <p>Cost per night: $${selectedRoom.costPerNight}</p>
    `;
}

const confirmBooking = () => {
    currentPanel = 'bookingConfirmationPanel';
    confirmBookingPanel.classList.remove('slide-in');
    confirmBookingPanel.classList.add('slide-out');
    setTimeout(() => {
        confirmBookingPanel.classList.add('hidden');
        confirmBookingPanel.classList.remove('slide-out');
        bookingConfirmationPanel.classList.remove('hidden');
        bookingConfirmationPanel.classList.add('slide-in');
    }, 500);

    addBooking(selectedDate, selectedRoom.number);
    loadData();

    setTimeout(() => {
        confirmationDetails.innerHTML = `
            <p>Confirmation No. ${pageData.latestBookingID}</p>
            <p>Room No. ${selectedRoom.number}</p>
            <p>${selectedRoom.roomType}</p>
            <p>${selectedRoom.numBeds} ${selectedRoom.bedSize} bed(s)</p>
            <p>Bidet? <span id="hasBidet">${hasBidet}</span></p>
            <p>Cost per night: $${selectedRoom.costPerNight}</p>
        `
    }, 100);
}

const returnToDash = () => {
    bookingConfirmationPanel.classList.add('hidden');
    bookingConfirmationPanel.classList.remove('slide-in');
    nav.classList.remove('blur', 'no-click');
    costAndToggle.classList.remove('blur', 'no-click');
    bookings.classList.remove('blur', 'no-click');
    newBooking.classList.add('hidden');
    newBooking.classList.remove('fade-in');
}

export { renderDashboard, loginUser, toggleView, bookNow, goToPreviousPanel, exitPanel, confirmDate, confirmRoomType, getRoomDetails, confirmBooking, returnToDash };
