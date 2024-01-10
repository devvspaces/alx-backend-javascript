/**
 * @param {Array} students
 * @returns {Array} Array of student ids
 */
function updateStudentGradeByCity(students, city, newGrades) {
  const result = students.filter((student) => student.location === city).map(student => {
    const grade = newGrades.filter(obj => obj.studentId == student.id)[0];
    return {
      ...student,
      grade: grade ? grade.grade : 'N/A'
    }
  })
  return result
}

export default updateStudentGradeByCity;
