var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var port = 8080;

var index = require('./routes/index');
var ads = require('./routes/ads');


//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'src')));

//routing
app.use('/', index);
app.use('/api/v1/', ads);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//Define the server

app.listen(port, function () {
    console.log('Server started on port' + port);
});
// var server = app.listen(port, function() {
//     var host = 'localhost';
//     var port = server.address().port;
//     console.log('App listening at http://%s:%s', host, port);
// });
 
module.exports = app;
