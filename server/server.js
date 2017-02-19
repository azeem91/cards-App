var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

var router = express.Router();              // get an instance of the express Router

app.use('/', router);
app.use(express.static('client'))
// Permessions - cors handeling - custom responce header stub
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');   
});

// Get all cards
router.get('/cards', function(req, res) {
	res.sendFile(__dirname + '/data/cards.json');   
});

// Get all campaigns
router.get('/campaigns', function(req, res) {
	res.sendFile(__dirname + '/data/campaigns.json');   
});


// START THE SERVER
app.listen(port);
console.log('Site is up on localhost: ' + port);