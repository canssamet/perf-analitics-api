
-DOCKER
docker pull mongo
docker run -d -p 27017-27019:27017-27019 --name node-express-mongo mongo:latest
http://localhost:27017/

npm i
npm run start

You have to check server for working or not working?
(GET) http://localhost:8000/api/pref 
(POST) http://localhost:8000/api/pref 
Post Data
{
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
}
