import express from 'express';
import * as perfController from '../controllers/perfController.js';

const routes = new express.Router();
  
const last30Minute = perfController.last30Minute
const savePerfData = perfController.savePerfData

routes.get('/',last30Minute);
routes.post('/',savePerfData);

export default routes;