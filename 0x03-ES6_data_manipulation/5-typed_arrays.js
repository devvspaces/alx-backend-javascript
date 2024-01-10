/**
 * @param {Array} students
 * @returns {Array} Array of student ids
 */
function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;
  return new DataView(buffer);
}

export default createInt8TypedArray;
