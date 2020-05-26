import mongoose from 'mongoose'

const perfSchema = new mongoose.Schema({
  ttfb: Number,
  fcp: Number,
  domContentLoad: Number,
  windowLoad: Number,
  createDate: Date,
  resource: [
    {
      name: String,
      requestStart: Number,
      responseEnd: Number,
    },
  ],
});

perfSchema.static('getLast30Minute', () => {
 return getLast30Minutes()
});

perfSchema.static('savePerf', (data) => {
  perfModel.create(data, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(result);
    }
  });
  return getLast30Minutes()
});

const getLast30Minutes = ()=>{
  var getLast30Minute = new Date();
  getLast30Minute.setMinutes(getLast30Minute.getMinutes() - 30);
  return mongoose.model('perfModel').find({"createDate": {"$gte": getLast30Minute}})
}

let perfModel;

try {
  perfModel = mongoose.model('perfModel', perfSchema);
} catch (e) {
  console.log(e)
}

export default perfModel;