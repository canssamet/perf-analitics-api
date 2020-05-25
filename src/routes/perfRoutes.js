import express from 'express';
import * as perfController from '../controllers/perfController.js';

const routes = new express.Router();
  
const last30Day = perfController.last30Day
const savePerfData = perfController.savePerfData

routes.get('/',last30Day);
routes.post('/',savePerfData);

export default routes;