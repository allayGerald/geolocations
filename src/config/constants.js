import dotenv from 'dotenv';

dotenv.config();
export default {

  /**
   * App environment
   * */

  NODE_ENV: process.env.NODE_ENV,

  /**
   * Application Port
   *
   * This value is the port of the application. This value is used to instruct
   * the HTTP server to direct the incoming traffic to your application.
   */
  PORT: process.env.PORT,

  /**
   * Default Database Connection
   *
   * This value specifies the database connection to be used by the application
   * for all database work.
   */
  DB_DATABASE: process.env.DB_DATABASE,

  /**
   * Markdown Mail Settings
   *
   * Below specifies theme and components used for rendering emails.
   */
  TEST_DB: 'mongodb://localhost:27017/geolocation_db_test',

    /**
     * Salt rounds required for hashing passwords using bcrypt library.
     * https://www.npmjs.com/package/bcrypt
     */
  BCRYPT_SALT_ROUNDS: 12,

};