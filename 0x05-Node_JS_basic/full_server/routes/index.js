import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Maps the routes to the Express application.
 * @param {Express} app The Express application.
 * @author Ayanwola Ayomide <https://github.com/devvspaces>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
