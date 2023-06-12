const sortBookings = (bookings) => {
    return bookings.sort((a, b) => new Date(a.date) - new Date(b.date));
}

const getUpcomingBookings = (bookings) => {
    const today = new Date();
    const filteredBookings = bookings.filter(booking => Date.parse(today) <= Date.parse(booking.date));
    return sortBookings(filteredBookings);
}


export { getUpcomingBookings };