
require('elastic-apm-node').start({
  serviceName: 'ultimate',
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

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8080;
var router = express.Router();

router.use(function(req, res, next) {
  console.log('There is a requesting.');
  next();
});

router.get('/', function(req, res) {
  throw new Error('哎呀， 出错了');
  // res.send('<h1>Hello World</h1>');
});

router.get('/:name', function(req, res) {
  res.send('<h1>Hello ' + req.params.name + '</h1>');
});

router.post('/', function (req, res) {
  var name = req.body.name;
  res.json({message: 'Hello ' + name});
});

app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);
