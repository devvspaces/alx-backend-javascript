/**
 * @param {Array} students
 * @returns {Array} Array of student ids
 */
function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((str) => str.startsWith(startString))
    .map((str) => str.substring(startString.length))
    .join('-');
}

export default cleanSet;
