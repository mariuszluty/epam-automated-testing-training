import { expect } from 'chai';
import {
  describe, beforeEach, afterEach, it,
} from 'mocha';
import NumbersValidator from '../../app/numbers-validator.js';

describe('getEvenNumbersFromArray', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('should return even numbers from array', () => {
    expect(validator.getEvenNumbersFromArray([1, 2, 3, 4])).to.be.eql([2, 4]);
  });
  it('should throw an error when provided with a string', () => {
    expect(() => {
      validator.getEvenNumbersFromArray('1, 2, 3, 4');
    }).to.throw('[1, 2, 3, 4] is not an array of "Numbers"');
  });
});
