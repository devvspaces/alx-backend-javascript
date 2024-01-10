/**
 * @param {Array} students
 * @returns {Array} Array of student ids
 */
function getStudentIdsSum(students) {
  return students.reduce((pv, student) => pv + student.id, 0);
}

export default getStudentIdsSum;
