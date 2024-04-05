const fs = require('fs');

/**
 * Reading a file synchronously with Node JS
 * @param {String} filePath The path to the CSV data file.
 * @author Ayanwola Ayomide <https://github.com/devvspaces>
 */
const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const filePathLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const pupilGroups = {};
      const databaseFields = filePathLines[0].split(',');
      const studentPropNames = databaseFields
        .slice(0, databaseFields.length - 1);

      for (const line of filePathLines.slice(1)) {
        const pupilRecord = line.split(',');
        const studentPropValues = pupilRecord
          .slice(0, pupilRecord.length - 1);
        const field = pupilRecord[pupilRecord.length - 1];
        if (!Object.keys(pupilGroups).includes(field)) {
          pupilGroups[field] = [];
        }
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        pupilGroups[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object.values(pupilGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(pupilGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
