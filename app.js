'use strict';
var path = require('path'),
    express = require('express'),
    _ = require('lodash'),
    fs = require('fs'),
    path = require('path'),
    bodyParser = require('body-parser'),
    multipart = require('connect-multiparty'),
    multipartyMiddleware = multipart(),
    app = express(),
    // fileFolderPath = './public/files/',
    // uploadDir = path.resolve(__dirname, fileFolderPath);
//configs
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('connect-livereload')());
// View
app.get('/', function(req, res) {
    res.sendFile('public/index.html', {
        root: __dirname
    });
});
app.get('/api/file/', function(req, res) {
    res.status(200).send()
});
app.post('/api/file/', multipartyMiddleware, function(req, res) {
    res.status(200).send()
})

app.put('/api/file/:id/:newid', function(req, res) {
   res.status(200).send()
});
app.get('/api/file/:id', function(req, res) {
    res.status(200).send()
});
app.get('/api/stat/:id', function(req, res) {
    res.status(200).send()
});
app.get('/api/access/:id', function(req, res) {
    res.status(200).send()
});
app.get('/api/exists/:id', function(req, res) {
    res.status(200).send()
});
app.delete('/api/file/:id', function(req, res) {
    res.status(200).send()
});

app.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});