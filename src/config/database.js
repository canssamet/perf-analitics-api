import mongoose from 'mongoose';
   
process.env.MONGO_URL = 'mongodb://localhost:27017/node-express-mongo'

try {
  mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});
} catch (err) {
  mongoose.createConnection(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true});
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', e => {
    throw e;
  });

  