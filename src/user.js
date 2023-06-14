// import { getRandomIndex } from "./helperFunctions";

// const getRandomUser = users => {
//     return users[0];
//     return users[getRandomIndex(users)];
// }

const userLookup = (username) => {
    const slicedUsername = Number(username.slice(8))
    if (username.startsWith('customer') && slicedUsername <= 50 && slicedUsername > 0) {
        return slicedUsername;
    }
}

const getTotalSpent = (bookings, rooms) => {
    return bookings.reduce((acc, booking) => {
        const thisRoom = rooms.find(room => room.number === booking.roomNumber);
        return acc += thisRoom.costPerNight;
    }, 0);
}

export { getTotalSpent, userLookup };
