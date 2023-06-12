import chai from 'chai';
const expect = chai.expect;

import { getTotalSpent } from "../src/user";
import { sampleData } from "./sampleData";

describe('getTotalSpent', () => {
    const totalSpent = getTotalSpent(sampleData.currentUserBookings, sampleData.allRooms);
    it('should add the total money spent on rooms', () => {
      expect(totalSpent).to.equal(2247.50);
    });
});
