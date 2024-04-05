const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';

describe('Test calculator', () => {
  describe('Test Summation', () => {
    it('equal +ve numbers', () => {
      expect(calculateNumber(SUM, 2.0, 2.0)).to.equal(4);
    });

    it('equal +ve numbers (alternate)', () => {
      expect(calculateNumber(SUM, 2.3, 1.8)).to.equal(4);
    });

    it('equal -ve numbers', () => {
      expect(calculateNumber(SUM, -2.0, -2.0)).to.equal(-4);
    });

    it('equal -ve numbers (alternate)', () => {
      expect(calculateNumber(SUM, -2.3, -1.8)).to.equal(-4);
    });

    it('-ve and +ve numbers', () => {
      expect(calculateNumber(SUM, -2.0, 2.0)).to.equal(0);
    });

    it('+ve and -ve numbers', () => {
      expect(calculateNumber(SUM, 2.0, -2.0)).to.equal(0);
    });

    it('0 and 0', () => {
      expect(calculateNumber(SUM, 0.0, 0.0)).to.equal(0);
    });
  });

  describe('Test subtraction', () => {
    it('equal +ve numbers', () => {
      expect(calculateNumber(SUBTRACT, 2.0, 2.0)).to.equal(0);
    });

    it('equal +ve numbers (alternate)', () => {
      expect(calculateNumber(SUBTRACT, 2.3, 1.8)).to.equal(0);
    });

    it('equal -ve numbers', () => {
      expect(calculateNumber(SUBTRACT, -2.0, -2.0)).to.equal(0);
    });

    it('equal -ve numbers (alternate)', () => {
      expect(calculateNumber(SUBTRACT, -2.3, -1.8)).to.equal(0);
    });

    it('-ve and +ve numbers', () => {
      expect(calculateNumber(SUBTRACT, -2.0, 2.0)).to.equal(-4.0);
    });

    it('+ve and -ve numbers', () => {
      expect(calculateNumber(SUBTRACT, 2.0, -2.0)).to.equal(4.0);
    });

    it('0 and 0', () => {
      expect(calculateNumber(SUBTRACT, 0.0, 0.0)).to.equal(0);
    });
  });

  describe('Test division', () => {
    it('+ve numbers', () => {
      expect(calculateNumber(DIVIDE, 8.0, 2.0)).to.equal(4.0);
    });

    it('numbers with different signs', () => {
      expect(calculateNumber(DIVIDE, -7.0, 2.0)).to.equal(-3.5);
    });

    it('numbers with different signs (alternate)', () => {
      expect(calculateNumber(DIVIDE, 7.0, -2.0)).to.equal(-3.5);
    });

    it('-ve numbers', () => {
      expect(calculateNumber(DIVIDE, -7.0, -2.0)).to.equal(3.5);
    });

    it('equal +ve numbers', () => {
      expect(calculateNumber(DIVIDE, 2.0, 2.0)).to.equal(1);
    });

    it('equal -ve numbers', () => {
      expect(calculateNumber(DIVIDE, -2.0, -2.0)).to.equal(1);
    });

    it('equal rounded up numbers', () => {
      expect(calculateNumber(DIVIDE, 2.6, 3.0)).to.equal(1);
    });

    it('equal rounded down numbers', () => {
      expect(calculateNumber(DIVIDE, 2.4, 2.0)).to.equal(1);
    });

    it('0 and +ve number', () => {
      expect(calculateNumber(DIVIDE, 0.0, 5.0)).to.equal(0);
    });

    it('0 and -ve number', () => {
      expect(calculateNumber(DIVIDE, 0.0, -5.0)).to.equal(-0);
    });

    it('+ve number and 0', () => {
      expect(calculateNumber(DIVIDE, 5.0, 0)).to.equal('Error');
    });

    it('+ve number and number rounded down to 0', () => {
      expect(calculateNumber(DIVIDE, 5.0, 0.2)).to.equal('Error');
    });

    it('+ve number and number rounded up to 0', () => {
      expect(calculateNumber(DIVIDE, 5.0, -0.2)).to.equal('Error');
    });

    it('-ve number and 0', () => {
      expect(calculateNumber(DIVIDE, -5.0, 0)).to.equal('Error');
    });

    it('-ve number and number rounded down to zero', () => {
      expect(calculateNumber(DIVIDE, -5.0, 0.2)).to.equal('Error');
    });

    it('-ve number and number rounded up to zero', () => {
      expect(calculateNumber(DIVIDE, -5.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber(DIVIDE, 0.0, 0.0)).to.equal('Error');
    });
  });
});
