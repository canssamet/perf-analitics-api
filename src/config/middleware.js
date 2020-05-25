import bodyParser from 'body-parser';
import compression from 'compression';

export default app => {
  app.use(bodyParser.json());
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
 };