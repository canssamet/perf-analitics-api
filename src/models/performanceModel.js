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

perfSchema.static('last30Day', () => {
  var last30days = new Date();
  last30days.setDate(last30days.getDate() - 30);
  return mongoose.model('perfModel').find({"createDate": {"$gte": last30days}})
});

perfSchema.static('savePerf', (data) => {
  perfModel.create(data, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(result);
    }
  });
  return mongoose.model('perfModel').find()
});

let perfModel;

try {
  perfModel = mongoose.model('perfModel', perfSchema);
} catch (e) {
  console.log(e)
}

export default perfModel;