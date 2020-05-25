/* eslint-disable no-undef */
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

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

  