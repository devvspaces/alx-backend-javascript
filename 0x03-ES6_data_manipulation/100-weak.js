
export const weakMap = new WeakMap();

/**
 * @param {Array} students
 * @returns {Array} Array of student ids
 */
export function queryAPI(endpoint) {
  const value = weakMap.get(endpoint);
  if (value === undefined) {
    weakMap.set(endpoint, 1)
    return 1;
  }
  if (value + 1 >= 5) {
    throw new Error('Endpoint load is high')
  }
  weakMap.set(endpoint,  value + 1);
  return value + 1;
}
