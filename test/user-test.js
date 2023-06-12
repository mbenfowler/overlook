import chai from 'chai';
const expect = chai.expect;

import { getTotalSpent } from "../src/user";
import { rooms } from "./sampleData";

describe('getTotalSpent', () => {
  const totalSpent = getTotalSpent(rooms);
  it('should add the total money spent on rooms', () => {
    expect(totalSpent).to.equal(2096.53);
  });
});
