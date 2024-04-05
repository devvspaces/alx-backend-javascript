const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('Test Payment API', () => {
  let bigBrother;

  beforeEach(() => {
    if (!bigBrother) {
      bigBrother = sinon.spy(console);
    }
  });

  afterEach(() => {
    bigBrother.log.resetHistory();
  });

  it('Logs "The total is: 90" to the console', () => {
    sendPaymentRequestToApi(70, 20);
    expect(bigBrother.log.calledWith('The total is: 90')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });

  it('Logs "The total is: 11" to the console', () => {
    sendPaymentRequestToApi(1, 10);
    expect(bigBrother.log.calledWith('The total is: 11')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });
});
