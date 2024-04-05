const assert = require('assert');
const calculateNumber = require('./1-calcul');

const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';

describe('Test calculator', () => {
  describe('Test Summation', () => {
    it('equal +ve numbers', () => {
      assert.strictEqual(calculateNumber(SUM, 2.0, 2.0), 4);
    });

    it('equal +ve numbers (alternate)', () => {
      assert.strictEqual(calculateNumber(SUM, 2.3, 1.8), 4);
    });

    it('equal -ve numbers', () => {
      assert.strictEqual(calculateNumber(SUM, -2.0, -2.0), -4);
    });

    it('equal -ve numbers (alternate)', () => {
      assert.strictEqual(calculateNumber(SUM, -2.3, -1.8), -4);
    });

    it('-ve and +ve numbers', () => {
      assert.strictEqual(calculateNumber(SUM, -2.0, 2.0), 0);
    });

    it('+ve and -ve numbers', () => {
      assert.strictEqual(calculateNumber(SUM, 2.0, -2.0), 0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber(SUM, 0.0, 0.0), 0);
    });
  });

  describe('Test subtraction', () => {
    it('equal +ve numbers', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 2.0, 2.0), 0);
    });

    it('equal +ve numbers (alternate)', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 2.3, 1.8), 0);
    });

    it('equal -ve numbers', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, -2.0, -2.0), 0);
    });

    it('equal -ve numbers (alternate)', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, -2.3, -1.8), 0);
    });

    it('-ve and +ve numbers', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, -2.0, 2.0), -4.0);
    });

    it('+ve and -ve numbers', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 2.0, -2.0), 4.0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber(SUBTRACT, 0.0, 0.0), 0);
    });
  });

  describe('Test division', () => {
    it('numbers with different signs', () => {
      assert.strictEqual(calculateNumber(DIVIDE, -7.0, 2.0), -3.5);
    });
  
    it('+ve numbers', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 8.0, 2.0), 4.0);
    });

    it('numbers with different signs (alternate)', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 7.0, -2.0), -3.5);
    });

    it('-ve numbers', () => {
      assert.strictEqual(calculateNumber(DIVIDE, -7.0, -2.0), 3.5);
    });

    it('equal rounded down numbers', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 2.4, 2.0), 1);
    });

    it('0 and +ve number', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 0.0, 5.0), 0);
    });

    it('+ve number and 0', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 5.0, 0), 'Error');
    });

    it('+ve number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 5.0, 0.2), 'Error');
    });

    it('+ve number and number rounded up to 0', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 5.0, -0.2), 'Error');
    });

    it('-ve number and 0', () => {
      assert.strictEqual(calculateNumber(DIVIDE, -5.0, 0), 'Error');
    });

    it('0 and -ve number', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 0.0, -5.0), -0);
    });

    it('equal +ve numbers', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 2.0, 2.0), 1);
    });

    it('equal -ve numbers', () => {
      assert.strictEqual(calculateNumber(DIVIDE, -2.0, -2.0), 1);
    });

    it('equal rounded up numbers', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 2.6, 3.0), 1);
    });

    it('-ve number and number rounded down to zero', () => {
      assert.strictEqual(calculateNumber(DIVIDE, -5.0, 0.2), 'Error');
    });

    it('-ve number and number rounded up to zero', () => {
      assert.strictEqual(calculateNumber(DIVIDE, -5.0, -0.2), 'Error');
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber(DIVIDE, 0.0, 0.0), 'Error');
    });
  });
});
