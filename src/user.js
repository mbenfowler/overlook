import { getRandomIndex } from "./helperFunctions";

const getRandomUser = users => {
    return users[getRandomIndex(users)];
}

const getTotalSpent = (bookings, rooms) => {
    return bookings.reduce((acc, booking) => {
        const thisRoom = rooms.find(room => room.number === booking.roomNumber);
        return acc += thisRoom.costPerNight;
    }, 0);
}

export { getRandomUser, getTotalSpent };
