// Module dependencies.
var application_root = __dirname,
    express = require('express'),
    formidable = require('formidable'),
    path = require('path'),
    mongoose = require('mongoose');

// Create server
var app = express();

// Configure server
app.configure(function() {
  // where to serve static content
  app.use(express.static(application_root));
  //show all errors in development
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

// Start server
var port = 4711;
app.listen(port, function() {
  console.log('Express server listening on port %d in %s node', port, app.settings.env);
});

/**
 * BDD
 */

/*
// Connect to database
mongoose.connect('mongodb://localhost/medialibrary_database');

// Schemas
var File = new mongoose.Schema({
  uid: Number,
  filename: String,
  filepath: String,
  filemime: String
});

// Models
var FileModel = mongoose.model('File', File);

*/

/**
 * Routes
 */

app.post('/upload', function(req, res) {
  if (req.method === 'POST') {
    // parse a file upload
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      var results = {fields: fields, files: files};
      console.log(results);

      res.set('Content-Type', 'application/json');
      res.json(results);
      res.send(200);
    });
  }
});
