import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import userAgent from 'express-useragent';

export default app => {
  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(cors());
  app.use(userAgent.express());
  app.use(helmet());

  // check the status of the api
  app.use('/', (req, res, next) => {
    if (req.method !== 'GET' || req.url !== '/') return next();

    res.send('status: ok');
  });

};