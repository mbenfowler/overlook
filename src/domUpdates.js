import { bookings } from "./scripts";

let currentView;

const pageLoadRenders = (pageData) => {
    currentView = 'upcoming';
    let rowColor;
    // function that gets only upcoming stays
    // function that sorts by date with soonest at the top of the list
    pageData.currentUserBookings.forEach((booking, i) => {
        const thisRoom = pageData.currentUserRooms.find(room => room.number === booking.roomNumber);
        i % 2 === 0 ? rowColor = '#bbf3c5' : rowColor = 'white';
        bookings.innerHTML += `
        <div style=background-color:${rowColor};">
            <span>${booking.date}</span>
            <span>${booking.roomNumber}</span>
            <span>${thisRoom.roomType}</span>
            <span>${thisRoom.bedSize}</span>
            <span>${thisRoom.numBeds}</span>
        </div>`
    });
}

export { pageLoadRenders };