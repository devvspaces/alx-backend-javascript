import readDatabase from '../utils';

/**
 * The list of supported majors.
 */
const SUPPORTED_MAJORS = ['CS', 'SWE'];

/**
 * StudentsController Class
 * @author Ayanwola Ayomide <https://github.com/devvspaces>
 */
class StudentsController {
  static getAllStudents(request, response) {
    const databaseFilePath = process.argv.length > 2 ? process.argv[2] : '';

    /**
     * Read the database and send the response.
     */
    readDatabase(databaseFilePath)
      .then((studentGroupings) => {
        const responseParts = ['This is the list of our students'];
        // A comparison function for ordering a list of strings in ascending
        // order by alphabetic order and case insensitive
        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, group] of Object.entries(studentGroupings).sort(cmpFxn)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  /**
   * Get all students by major
   * @param {*} request The request object
   * @param {*} response The response object
   */
  static getAllStudentsByMajor(request, response) {
    const databaseFilePath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!SUPPORTED_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(databaseFilePath)
      .then((studentGroupings) => {
        let result = '';

        if (Object.keys(studentGroupings).includes(major)) {
          const group = studentGroupings[major];
          result = `List: ${group.map((obj) => obj.firstname).join(', ')}`;
        }
        response.status(200).send(result);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
