import chai from 'chai';
const expect = chai.expect;

import { getUpcomingBookings } from "../src/bookings";
import { sampleData } from "./sampleData";

describe('getUpcomingBookings', () => {
    const upcomingBookings = getUpcomingBookings(sampleData.currentUserBookings);
    it('should correctly filter just upcoming dates', () => {
      expect(upcomingBookings.length).to.equal(1);
    });

    const today = new Date();
    today.setDate(today.getDate() + 1);
    const todaysBooking = getUpcomingBookings([{date: today.toLocaleDateString("en-CA")}]);

    it('should correctly add todays bookings to upcoming dates', () => {
        expect(todaysBooking.length).to.equal(1);
    });
});