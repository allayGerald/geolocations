import express from 'express';

import apiRoutes from './modules/index.js';
import constants from './config/constants.js';
import middlewaresConfig from './middlewares/common.js';
import DB from './config/database.js';
// import { seedData } from './config/seeder/data.seeder.js';

const app = express();
(() => { DB(app); })();
middlewaresConfig(app);

apiRoutes(app);
// seedData();

app.on('ready', function() {

  app.listen(constants.PORT, err => {
    if (err) {
      throw err;
    } else {
      console.log(`
      Server running on port: ${constants.PORT}
      Running on ${process.env.NODE_ENV}
    `);
    }
  });

});

export default app;