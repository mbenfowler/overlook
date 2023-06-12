import { getRandomIndex } from "./helperFunctions";

const getRandomUser = users => {
    return users[getRandomIndex(users)]
}

const getTotalSpent = data => {
    return data.currentUserBookings.reduce((acc, booking) => {
        const thisRoom = data.allRooms.find(room => room.number === booking.roomNumber);
        return acc += thisRoom.costPerNight;
    }, 0)
}

export { getRandomUser, getTotalSpent };