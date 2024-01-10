/**
 * @param {Array} students
 * @returns {Array} Array of student ids
 */
function hasValuesFromArray(set, arr) {
  for (const elem of arr) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

export default hasValuesFromArray;
