function run(callback) {

  const express = require('express');
  const bodyParser = require('body-parser');
  const download = require('./routes/download');

  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(download);

  var server = app.listen(3001, function () {
    console.log('Server listening on port 3001');

    if (callback) {
      callback();
    }
  });

  server.on('close', function () {
    console.log('Server closed');
  });

  return server;
}

if (require.main === module) {
  run();
}

exports.run = run;