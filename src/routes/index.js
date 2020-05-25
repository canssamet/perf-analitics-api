import express from 'express';
import perfRoutes from './perfRoutes.js'

const routes = new express.Router();

routes.use('/perf', perfRoutes);
export default routes