/**
 * AppController Class
 * @author Ayanwola Ayomide <https://github.com/devvspaces>
 */
class AppController {

  /**
   * Get Homepage
   * @param {*} _ 
   * @param {*} response The response object.
   */
  static getHomepage(_, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
