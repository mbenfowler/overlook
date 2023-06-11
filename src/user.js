import { getRandomIndex } from "./helperFunctions";

const getRandomUser = users => {
    return users[getRandomIndex(users)]
}

export { getRandomUser };