import { bookings, root, leadingZero } from "./scripts";
import { getTotalSpent } from "./user";

let currentView;

const pageLoadRenders = (pageData) => {
    currentView = 'upcoming';
    // function that gets only upcoming stays
    // function that sorts by date with soonest at the top of the list

    const totalDollarsSpent = getTotalSpent(pageData);

    const cents = Math.trunc((totalDollarsSpent % 1).toFixed(2) * 100);
    if (cents.toString().length > 1) {
        leadingZero.classList.add('hidden');
    }

    root.style.setProperty('--costInDollars', totalDollarsSpent.toFixed(0));
    root.style.setProperty('--cents', cents)

    let rowColor;
    pageData.currentUserBookings.forEach((booking, i) => {
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

export { pageLoadRenders };