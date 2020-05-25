import express from 'express'
import cors from 'cors'
import middleware from './config/middleware.js'
import apiRoutes from './routes/index.js'
import './config/database.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
middleware(app)

app.use(cors())
app.use('/api', apiRoutes);
 
app.listen(process.env.PORT || 8000, () => {
  console.log('Example app listening on port 8000!')
});

export default app