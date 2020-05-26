-Docker Api
docker-compose build
docker-compose up -d

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
