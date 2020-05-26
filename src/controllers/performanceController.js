import HTTPStatus from 'http-status';
import perfModel from '../models/performanceModel.js';

export async function getLast30Minute(req, res, next) {
  try {
    const perfData = await perfModel.getLast30Minute()
    console.log(perfData)
    return res.status(HTTPStatus.OK).json(perfData);
  } catch (err) {
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}

export async function savePerfData(req, res, next) {
  try {
    const body = req.body
    const result = await perfModel.savePerf(body)
    return res.send(result)
  } catch (err) {
    console.log(err)
    err.status = HTTPStatus.BAD_REQUEST;
    return next(err);
  }
}
