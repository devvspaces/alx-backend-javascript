const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('Test Payment API', () => {
  it('API uses the calculateNumber method of Utils', () => {
    const bigBrother = sinon.spy(Utils);
    sendPaymentRequestToApi(50, 20);
    expect(bigBrother.calculateNumber.calledWith('SUM', 50, 20)).to.be.true;
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
    bigBrother.calculateNumber.restore();
  });
});
