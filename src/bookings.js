const getUpcomingBookings = (bookings) => {
    const today = new Date();
    return bookings.filter(booking => Date.parse(today) <= Date.parse(booking.date));
}


export { getUpcomingBookings };