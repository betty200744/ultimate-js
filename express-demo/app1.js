
var express    = require('express');
var app        = express();
require('elastic-apm-node').start({
  serviceName: 'jstraining',
  serverUrl: process.env.NODE_ENV === 'production' ? 'http://127.0.0.1:8200' : 'http://127.0.0.1:8200',
  active: true,
  captureSpanStackTraces: false,
  captureBody: 'all',
  ignoreUrls: [
    '/app/health',
    '/health/ready',
    '/health/alive',
  ],
});




var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);
