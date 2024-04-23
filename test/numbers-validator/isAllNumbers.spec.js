import { expect } from 'chai';
import {
  describe, beforeEach, afterEach, it,
} from 'mocha';
import NumbersValidator from '../../app/numbers-validator.js';

describe('isAllNumbers', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('should return true if array contains all numbers', () => {
    expect(validator.isAllNumbers([1, 2, 3, 4])).to.be.equal(true);
  });
  it('should throw an error when provided with a string', () => {
    expect(() => {
      validator.isAllNumbers('1, 2, 3, 4');
    }).to.throw('[1, 2, 3, 4] is not an array');
  });
});
