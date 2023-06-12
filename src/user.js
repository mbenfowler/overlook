import { getRandomIndex } from "./helperFunctions";

const getRandomUser = users => {
    return users[getRandomIndex(users)]
}

const getTotalSpent = rooms => {
    return rooms.reduce((acc, room) => {
        return acc += room.costPerNight
    }, 0);
}

export { getRandomUser, getTotalSpent };