/**
 * @param {Array} students
 * @returns {Array} Array of student ids
 */
function cleanSet(set, startstring) {
  if (!startstring) {
    return ''
  }
  return Array.from(set)
    .filter((str) => str.startsWith(startstring))
    .map((str) => str.substring(startstring.length))
    .join('-');
}

export default cleanSet;
