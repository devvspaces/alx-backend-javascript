import fs from 'fs';

/**
 * Reads a CSV data file and returns the data as a dictionary.
 * @param {String} path The path to the CSV data file.
 * @author Ayanwola Ayomide <https://github.com/devvspaces>
 * @returns {Promise<{
 *   String: {firstname: String, lastname: String, age: number}[]
 * }>}
 */
const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  if (path) {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const students = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGroups = {};
        const dbFieldNames = students[0].split(',');
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        for (const line of students.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
