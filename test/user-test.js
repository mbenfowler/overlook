import chai from 'chai';
const expect = chai.expect;

import { getTotalSpent, userLookup } from "../src/user";
import { sampleData } from "./sampleData";

describe('getTotalSpent', () => {
    const totalSpent = getTotalSpent(sampleData.currentUserBookings, sampleData.allRooms);
    it('should add the total money spent on rooms', () => {
      expect(totalSpent).to.equal(2247.50);
    });

    const zeroBookings = getTotalSpent([], sampleData.allRooms);
    it('should not break if no user bookings yet', () => {
      expect(zeroBookings).to.equal(0);
    });
});

describe('userLookup', () => {
  const validUsername = 'customer10';
  const userID1 = userLookup(validUsername);
  it('should find and return valid user id', () => {
    expect(userID1).to.equal(10);
  });

  const invalidUsername1 = 'soinvald10';
  const userID2 = userLookup(invalidUsername1);
  it('should not find invalid username', () => {
    expect(userID2).to.equal(undefined);
  });

  const invalidUserID1 = 'customer51';
  const userID3 = userLookup(invalidUserID1);
  it('should not find invalid user id over 50', () => {
    expect(userID3).to.equal(undefined);
  });

  const invalidUserID2 = 'customer-1';
  const userID4 = userLookup(invalidUserID2);
  it('should not find invalid user id less than zero', () => {
    expect(userID4).to.equal(undefined);
  });

  const invalidUserID3 = 'customer0';
  const userID5 = userLookup(invalidUserID3);
  it('should not find invalid user id of zero', () => {
    expect(userID5).to.equal(undefined);
  });

  const invalidUserID4 = 'customeraaa';
  const userID6 = userLookup(invalidUserID4);
  it('should not find invalid user id of non-number characters', () => {
    expect(userID6).to.equal(undefined);
  });
});
