const sortBookings = (bookings, view) => {
    let sortedBookings;
    if (view === 'upcoming') {
        sortedBookings = bookings.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (view === 'previous') {
        sortedBookings = bookings.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    
    return sortedBookings;
}

const getBookingsByView = (bookings, view) => {
    const today = new Date();
    let filteredBookings;
    if (view === 'upcoming') {
        filteredBookings = bookings.filter(booking => Date.parse(today) <= Date.parse(booking.date));
    } else if (view === 'previous') {
        filteredBookings = bookings.filter(booking => Date.parse(today) > Date.parse(booking.date));
    }
    return sortBookings(filteredBookings, view);
}


export { getBookingsByView };