/**
 * @param {Array} students
 * @returns {Array} Array of student ids
 */
function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}

export default getListStudentIds;
