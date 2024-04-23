import { expect } from 'chai';
import {
  describe, beforeEach, afterEach, it,
} from 'mocha';
import NumbersValidator from '../../app/numbers-validator.js';

describe('isInteger', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('should return true if number is Integer', () => {
    expect(validator.isInteger(4)).to.be.equal(true);
  });
  it('should throw an error when provided with a string', () => {
    expect(() => {
      validator.isInteger('4');
    }).to.throw('[4] is not a number');
  });
});
