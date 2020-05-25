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
  return mongoose.model('perfModel').find()
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