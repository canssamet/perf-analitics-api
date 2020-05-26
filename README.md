# NODEJS + EXPRESSJS + MONGO + DOCKER 

<hr>

## How to start ?

Run using Docker Compose

```
$ docker-compose build
$ docker-compose up -d
```
### Best Practices
You can get performance data in the last 30 minutes
```
(GET) http://localhost:8000/api/pref 
```
You can save performance data
```
(POST) http://localhost:8000/api/pref 
```
Use this model
```
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
```
 
