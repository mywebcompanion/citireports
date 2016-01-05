
//http://jsreport.net/learn/adapting-jsreport
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

var reportingApp = express();
app.use('/reporting', reportingApp);

var jsreport = require('jsreport')({
    express: { app :reportingApp }
});

jsreport.init().then(function() {
    app.listen(3000);
});