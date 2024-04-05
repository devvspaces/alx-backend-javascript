const Utils = require('./utils');

/**
 * Send payment request to API
 * @param {*} totalAmount 
 * @param {*} totalShipping 
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  const response = `The total is: ${totalCost}`;
  console.log(response);
};

module.exports = sendPaymentRequestToApi;
