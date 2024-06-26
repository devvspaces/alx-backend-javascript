const express = require('express');
const fs = require('fs');

/**
 * Create a more complex HTTP server using Express
 */
const app = express();
const port = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} fileDbPath The path to the CSV data file.
 * @author Ayanwola Ayomide <https://github.com/devvspaces>
 */
const countStudents = (fileDbPath) => new Promise((resolve, reject) => {
  if (!fileDbPath) {
    reject(new Error('Cannot load the database'));
  }
  if (fileDbPath) {
    fs.readFile(fileDbPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reportParts = [];
        const dbLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = dbLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(
          0,
          dbFieldNames.length - 1,
        );

        for (const line of dbLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1,
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Length', responseText.length);
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Length', responseText.length);
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
