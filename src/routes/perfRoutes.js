import express from 'express';
import * as performanceController from '../controllers/performanceController.js';

const routes = new express.Router();
  
const getLast30Minute = performanceController.getLast30Minute
const savePerfData = performanceController.savePerfData

routes.get('/',getLast30Minute);
routes.post('/',savePerfData);

export default routes;