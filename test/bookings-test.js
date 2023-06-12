import chai from 'chai';
const expect = chai.expect;

import { getBookingsByView } from "../src/bookings";
import { sampleData } from "./sampleData";

describe('getBookingsByView', () => {
    const upcomingBookings = getBookingsByView(sampleData.currentUserBookings, 'upcoming');
    it('should correctly filter just upcoming dates', () => {
      expect(upcomingBookings.length).to.equal(1);
    });

    const today = new Date();
    today.setDate(today.getDate() + 1);
    const todaysUpcomingBooking = getBookingsByView([{date: today.toLocaleDateString("en-CA")}], 'upcoming');
    it('should correctly add todays bookings to upcoming dates', () => {
        expect(todaysUpcomingBooking.length).to.equal(1);
    });

    const previousBookings = getBookingsByView(sampleData.currentUserBookings, 'previous');
    it('should correctly filter just previous dates', () => {
      expect(previousBookings.length).to.equal(4);
    });

    const todaysPreviousBooking = getBookingsByView([{date: today.toLocaleDateString("en-CA")}], 'previous');
    it('should not add todays bookings to previous dates', () => {
        expect(todaysPreviousBooking.length).to.equal(0);
    });
});
