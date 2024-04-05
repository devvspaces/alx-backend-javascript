
/**
 * Calculate the result of a math operation
 * @param {*} type 
 * @param {*} a 
 * @param {*} b 
 * @returns {number} the result of the operation
 */
const calculateNumber = (type, a, b) => {
  switch (type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    default:
      break;
  }
  return 0;
};

module.exports = calculateNumber;
